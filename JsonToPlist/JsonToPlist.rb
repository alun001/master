#!/usr/bin/ruby
require 'rubygems'
require 'json'
require 'pp'

# 生成文件
def readPlist(plist)
  $plist = plist 
  pathName = File.basename("#{$plist}",".json")
  neirong = getMore()
  plist = File.read("Plist/action-3020.plist")
  plist = plist.gsub("#","#{neirong}")
  plist = plist.gsub("[","")
  plist = plist.gsub("]","")
  plist = plist.gsub("\"","")
  plist = plist.gsub("\\n","")
  plist = plist.gsub("\\r","")
  plist = plist.gsub("wotounima","#{pathName}")
  puts plist
  #这个是最后生成的文件路径  
  f = File.new("E:/Code/CocosCode/aaa/assets/aaa/"+"#{pathName}"+".plist","w+")
  f.puts(plist)
end
def readJson
  pathJson = File.read("#{$plist}")
  obj = JSON.parse(pathJson)
  resM = obj["res"]
  frames = obj["mc"]["main"]["frames"]
  ajaxList = Array.new
  for i in 0..frames.length-1
    resOne = frames[i]["res"]
    ajax = Array.new
    ajax[0] = frames
    ajax[1] = resM["#{resOne}"]["x"]
    ajax[2] = resM["#{resOne}"]["y"]
    ajax[3] = resM["#{resOne}"]["w"]
    ajax[4] = resM["#{resOne}"]["h"]
    ajax[5] = frames[i]["x"]
    ajax[6] = frames[i]["y"]
    ajaxList[i] = ajax
  end
  return ajaxList
end
# 获取 7 8
def getSize
  ajaxList = readJson()
  size = Array.new
  size = [2,4,8,16,32,64,128,256,512,1024]
  for a in 0..ajaxList.length-1
    for i in 0..size.length-1
      if ajaxList[a][4] < size[i]
        ajaxList[a][8] = size[i]
        break
      end
    end
  end
  for a in 0..ajaxList.length-1
    for i in 0..size.length-1
      if ajaxList[a][3] < size[i]
        ajaxList[a][7] = size[i] 
        break
      end
    end
  end
  return ajaxList
end
# 生成多个结构体
def getMore
  ajaxList = getSize()
  frames = ajaxList[0][0]
  moreList = Array.new
  for i in 0..frames.length-1
    ajaxList[i][0] = "#{i}.png"
    more = File.read("Plist/More.plist") 
    for j in 0..8
      more = more.gsub("ajax#{j}","#{ajaxList[i][j]}")
    end
    moreList[i] = more
  end
  return moreList
end
# ARGV
# 把文件路径以参数的形式接收
filename = ARGV.first
readPlist(filename)


#path = STDIN.gets.chomp
#puts path
#readPlist(path)
