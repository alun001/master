#!/usr/bin/ruby -w

def get_source
	targetArr = []
	Dir.glob("src/**/*") { |file|
		if file.include? "View" and File.directory?file
			dirname = File.dirname(file)
			start = dirname.index("View")
			if start
				name = dirname[0 .. (start-2)]
				targetArr[targetArr.length] = name
			end
		end
	}
	targetArr = targetArr.uniq
	return targetArr
end