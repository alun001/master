#!/bin/bash
#更改为自己的目录地址
cd F://kai

pwd

## text color
TEXT_RED="\033[31m"
TEXT_GREEN="\033[32m"
TEXT_NC="\033[0m"

echo -e "\033[32m 欢迎使用自动合并工具 \033[0m"

targetBranchName="master"

echo " "
echo "请选择目标分支? 输入数字： 1 或者 2"
echo "1 origin/master"
echo "2 staging"

read number
case $number in
1)echo "你选择目标分支是： master" && targetBranchName="master"
;;
2)echo "你选择目标分支是： staging" && targetBranchName="staging"
;;

esac

read -p "输入源分支名称: "  sourceBranchName

stepFour(){

    echo "-------step4: run git merge"
    if git merge origin/${sourceBranchName}

    then
        echo -e "-------step4: run git merge ${TEXT_GREEN}finished${TEXT_NC}" && stepFive
    else
        echo -e "${TEXT_RED} git merge 失败。查看上文提示，请回到项目工程手动处理${TEXT_NC}"
        git merge --abort
    fi

}

stepFive(){
    echo "-------step5: run git push"

    echo -e "${TEXT_GREEN}run git status${TEXT_NC}"

    git status

    seconds_left=6
    echo "请确认...马上执行git push"
    while [ $seconds_left -gt 0 ];do
      echo -n $seconds_left
      sleep 1
      seconds_left=$(($seconds_left - 1))
      echo -ne "\r     \r" #清除本行文字
    done


    git push &&
    echo -e "-------step5: git push ${TEXT_GREEN}finished${TEXT_NC} \n合并${targetBranchName}完成，去重启吧！"
    deployerUrl=""

    if [ ${targetBranchName} == 'staging' ]; then
        deployerUrl=""
    fi
    start "chrome" ${deployerUrl}
}


if [ ! ${sourceBranchName} ]; then
    echo -e "${TEXT_RED} 源分支名称不能为空，请重新输入!!"
else
    echo -n "你输入的分支名称： " ${sourceBranchName}

    echo ' 目标分支： ' ${targetBranchName}

    echo -e ${TEXT_RED}${sourceBranchName}${TEXT_NC} ${TEXT_GREEN}"分支合并到"${TEXT_NC} ${TEXT_RED}${targetBranchName}${TEXT_NC} ${TEXT_GREEN}"分支 马上开始... ${TEXT_NC}"

    seconds_left=6
    echo "请确认..."
    while [ $seconds_left -gt 0 ];do
      echo -n $seconds_left
      sleep 1
      seconds_left=$(($seconds_left - 1))
      echo -ne "\r     \r" #清除本行文字
    done

    echo "-------step1: run git pull"

    if git checkout ${targetBranchName} && git pull

    then
        echo -e "-------step1: git pull ${TEXT_GREEN}finished${TEXT_NC}" && stepFour
    else
        echo "${TEXT_RED}git checkout or git pull 失败！${TEXT_NC}"
    fi

fi