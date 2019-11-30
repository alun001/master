def get_source(plist)
    f = File.open("#{plist}", 'r')
    t = File.new("F:/kai/lunaaa.txt","w+")
    ary= f.readlines
    ary.each do |i|
       if i.include?("roll")
	      length =  i.length
		  roll = i.rindex("=")
		  num = i.slice(roll+1,length-roll-3)
		  if number(num)
		     puts i
		     t.puts(i)
		  end
	   end
    end
end
def number(num)
	leg = num.length
	roll = num.rindex("/")
	num1 = num.slice(0,roll)
	num2 = num.slice(roll+1,leg-1)
	if num1.to_i >= num2.to_i
	   return true
	else
	   return false
	end
end
filename = ARGV.first
get_source(filename)