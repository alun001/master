const express = require('express');
const http = require('http');
const app = express();
var fs = require('fs');
var arguments = process.argv.splice(2);
var parms;
require('shelljs/global');

const hostname = '127.0.0.1';
const port = 8700;
var url = '127.0.0.1:8700';
var outLog = '';

const server = http.createServer();

if(arguments.length == 1)
{
    var fun = eval(arguments[0]);
    new fun();
}
else if(arguments.length > 1)
{
    var fun = eval(arguments[0]);
    parms = arguments.slice(1);
    new fun();
}

function read()
{
    fs.readFile('./bin/Hello.txt',function (error,data) {
        if(error)
            console.log("读取失败");
        else
            console.log(data.toString());
    })
}

app.get('/', function(req, res, next){
    console.log('根');
    //res.send('hello 51code');
    res.send('Root');
});

//传回远程仓库的历史
app.get('/Log', function(req, res, next){
    var str1 = "当前远程的仓库的Log为：\n" + exec('git log',{silent:true});
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    var str1 = JSON.stringify(str1);
    var str2 = eval(str1);
    res.send(str2);
});

//传回远程仓库的情况
app.get('/Status', function(req, res, next){
    var str3 = "当前远程的仓库的Status为：\n" + exec('git Status',{silent:true});
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    var str3 = JSON.stringify(str3);
    var str4 = eval(str3);
    res.send(str4);
});

//通知服务器拉取所有人的仓库代码，记录被分别存储到每个人的Json底下
app.get('/Merge',function(req, res, next){
	fs.readFile('./bin/version.txt','utf-8',function (err, data) {
        if(err) throw err;
        else
            console.log(data);
            exec(`git checkout build`,{silent:true});
            exec(`git reset --hard ${data}`,{silent:true});
    });
	let member = exec(`git remote show`,{silent:true});
	let memberList = member.split('\n');
	let t = {member:[]};
	t.member = memberList;
	console.log(t.member.length);
	for(let i = 0;i < t.member.length;i++)
	{
		fs.readFile(`./bin/${t.member[i]}.json`,'utf-8',function (err, data) {
                if(err)
                {
                    console.log(`${t.member[i]}没有提交`);
                }
                else{
                    var read = JSON.parse(data);
                   	oldHash = read.oldHash;
                   	if(oldHash == null)
                   	{
                   		console.log(`${t.member[i]}内没有提交记录或者提交失败！`);
                   	}
                   	else
                   	{
                   		for(let i = 0; i < oldHash.length; i++)
                   		{
                   			exec('git checkout master',{silent:true});
                   			exec('git branch build',{silent:true});
                   			exec('git checkout build',{silent:true});
                   			exec(`git cherry-pick ${oldHash[i]}`,{silent:true});
                   		}
                   	}
        }});
	}
	res.send('已拉取所有远程仓库的提交！');
	/*let str = JSON.stringify(t,'','\t');
    fs.writeFile(`./bin/member.json`,str,(err)=>{
    	if(err) throw err;
            	console.log('已载入全部远程仓库');
    });*/
});


//通知服务器拉取,需要传参：1、要提交的数量 2、提交人的信息
app.get('/Pull', function(req, res, next){
    var num = 0;
    let keys = Object.keys(req.query);
    if(req.query == null)
        return;
    /*else if(keys.length == 2)
    {
        let t = {creator:req.query.creator,start:+req.query.num,end:0,oldHash:[],newHash:[]};
        fs.readFile(`./bin/${req.query.creator}.json`,'utf-8',function (err, data) {
                if(err)
                {
                    console.log(err);
                    t.oldHash = [];
                    t.newHash = [];
                    pullNum(t);
                }
                else{
                    var read = JSON.parse(data);
                    console.log(read.creator);
                    console.log(read.start);
                    console.log(read.end);
                   	oldHash = read.oldHash;
                   	if(oldHash == null)
                   	{
                   		t.oldHash = [];
                   		pullNum(t);
                   	}
                   	else
                   	{
                   		t.oldHash = read.newHash;
                   		pullNum(t);
                   	}
        }});
        function pullNum(t)
        {
        	exec(`git checkout master`,{silent:true});
        	exec(`git fetch --all`,{silent:true});
        	//记录用户远端仓库的拉取哈希码
        	let code = exec(`git log master..${req.query.creator}/master --pretty=format:"%H"`,{silent:true});
        	let newHash =  code.split('\n');
        	if(t.oldHash.length > 0)
        	{
        		console.log('45678889:',t.oldHash.length);
        		for(let i = 0;i<t.oldHash.length;i++)
        		{
        			for(let j=0;j<newHash.length;j++)
        			{
        				let isSame = false;
        				if(newHash[j] == t.oldHash[i])
        				{
        					isSame = true;
        					break;
        				}
        				else if (isSame == false && newHash[j] != t.oldHash[i] && j == newHash.length - 1)
        				{
        					t.oldHash += newHash[j];
        					break;
        				}
        			}
        		}
        	}
       		else
        	{
        		t.oldHash = newHash;
        	}
        	t.newHash = newHash;
        	exec(`git branch -D ${req.query.creator}_br`,{silent:true});
        	exec(`git branch ${req.query.creator}_br`,{silent:true});
        	exec(`git checkout ${req.query.creator}_br`,{silent:true});
        	exec(`git cherry-pick ${req.query.creator}/master~${+req.query.num}..${req.query.creator}/master~0`,{silent:true});
        	let log = exec(`git log`);
        	let str = JSON.stringify(t,'','\t');
        	fs.writeFile(`./bin/${req.query.creator}.json`,str,(err)=>
        	{
            	if(err) throw err;
            	console.log('提交已记录');
        	});
        	let struct = {
            	warning : `您这次一共有${req.query.num}个提交.
您的身份是：${req.query.creator}
您的要合并的分支仓库目前的状态如下:
${log}`,
            	exp: true
        	};
        	res.send(struct);
        }
    }*/
    else if(keys.length == 3)
    {
        console.log(req.query);
        let t = {creator:req.query.creator,start:+req.query.start,end:+req.query.end,oldHash:[],newHash:[]};
        fs.readFile(`./bin/${req.query.creator}.json`,'utf-8',function (err, data) {
                if(err)
                {
                    t.oldHash = [];
                    t.newHash = [];
                    pullArea(t);
                    console.log(err);
                }
                else{
                    var read = JSON.parse(data);
                    console.log(read.creator);
                    console.log(read.start);
                    console.log(read.end);
                   	oldHash = read.oldHash;
                   	if(oldHash == null)
                   	{
                   		t.oldHash = [];
                   		pullArea(t);
                   	}
                   	else
                   	{
                   		t.oldHash = read.oldHash;
                   		pullArea(t);
                   	}
        }});
        function pullArea(t)
        {
        	console.log(t);
			exec(`git checkout master`,{silent:true});
        	exec(`git fetch --all`,{silent:true});
        	//记录用户远端仓库的拉取哈希码
       		let code = exec(`git log ${req.query.creator}/master~${+req.query.end+1}..${req.query.creator}/master~${req.query.start} --pretty=format:"%H"`,{silent:true});
       		console.log('code',code);
        	let newHash = code.split('\n');
        	if(t.oldHash.length > 0)
        	{
        		console.log('pullArea');
        		count = newHash.length;
        		console.log('oldLeng:',count);
        		console.log('newLeng',newHash.length);
        		for(let i = 0;i<count;i++)
        		{
        			console.log('i',i);
        			let isSame = false;
        			for(let j=0;j<oldHash.length;j++)
        			{
        				console.log('j',j);
        				if(newHash[i] == t.oldHash[j])
        				{
        					isSame = true;
        					break;
        				}
        				else if (isSame == false && j == oldHash.length - 1)
        				{
        					console.log('Psuh!');
        					t.oldHash.push(newHash[i]);
        					break;
        				}
        			}
        		}
        	}
       		else
        	{
        		t.oldHash = newHash;
        	}
        	t.newHash = newHash;
        	exec(`git branch -D ${req.query.creator}_br`,{silent:true});
        	exec(`git branch ${req.query.creator}_br`,{silent:true});
        	exec(`git checkout ${req.query.creator}_br`);
        	exec(`git cherry-pick ${req.query.creator}/master~${+req.query.end+1}..${req.query.creator}/master~${+req.query.start}`);
        	let log = exec(`git log`);
        	let str = JSON.stringify(t,'','\t');
        	fs.writeFile(`./bin/${req.query.creator}.json`,str,(err)=>
        	{
            	if(err) throw err;
            	console.log('区域提交已记录');
        	});
        	let struct = {
            	warning : `您这次一共有${req.query.num}个提交.
您的身份是：${req.query.creator}
您的要合并的分支仓库目前的状态如下:
${log}`,
            	exp: true
        	};
        	res.send(struct);
    	}
    }
});

//通知服务器删除提交的分支，需要传参：1、提交人的信息
app.get('/Remove', function(req, res, next)
{
    if (req.query == null)
        return;
    else
        fs.readFile('./bin/version.txt','utf-8',function (err, data) {
            if (err)
                console.log(err);
            else {
                console.log(data);
                exec(`git checkout ${req.query.creator}`, {silent: true});
                exec(`git reset --hard ${data}`, {silent: true});
                exec(`git checkout master`, {silent: true});
                let t = {creator: req.query.creator, start: 0, end: 0, oldHash: [], newHash: []};
                fs.readFile(`./bin/${req.query.creator}.json`, 'utf-8', function (err, data) {
                    if (err) {
                        console.log('无法查找到您的提交历史，请提交！');
                    }
                    else {
                        var read = JSON.parse(data);
                        t.creator = read.creator;
                        t.oldHash = read.oldHash;
                        t.newHash = req.query.hashcode;
                        if (t.oldHash == null)
                            console.log('无法查找到您的提交记录，请重新提交！');
                        else {
                            if (t.oldHash.length > 0) {
                                for (let i = 0; i < t.oldHash.length; i++)
                                {
                                    if (t.oldHash[i] == req.query.hashcode)
                                        t.oldHash.splice(i, 1);
                                }
                                let str = JSON.stringify(t,'','\t');
                                fs.writeFile(`./bin/${req.query.creator}.json`, str, (err) => {
                                    if (err) throw err;
                                });
                            }
                        }
                    }
                });
                res.send('移除成功！');
            }
        })});

//通知服务器进行合并
app.get('/Publish', function(req, res, next){
    exec(`git checkout master`, {silent: true});
    var locator = exec(`git rev-parse master`, {silent: true});
    fs.writeFile('./bin/version.txt',locator,(err)=>
    {
        if(err) throw err;
        console.log('版本已记录');
        rebase();
    });
    function rebase()
    {
    	exec(`git checkout master`);
    	exec(`git rebase build`);
    }
    res.send(`版本已被标识`);
});

app.get('/Revert',function (req,res,next) {
    fs.readFile('./bin/version.txt','utf-8',function (err, data) {
        if(err) throw err;
        else
            console.log(data);
            exec(`git checkout master`);
            exec(`git reset --hard ${data}`);
    });
    res.send('已回退到前一个版本');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
