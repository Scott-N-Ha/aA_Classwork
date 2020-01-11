require "byebug"
def max_range(arr, window)
  max_range = nil
  #debugger
  ending_position = arr.size - window + 1
  for i in (0...ending_position)
    current_max_range = nil
    pos = i + window - 1
    for first in (i..pos - 1)
      for second in (first + 1..pos)
        min = arr[first]
        max = arr[second]
        diff  = max - min
        current_max_range = diff if current_max_range.nil? || diff > current_max_range
      end
    end
    max_range = current_max_range if max_range.nil? || current_max_range > max_range
  end
  max_range
end

p max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
p max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
p max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
p max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8

