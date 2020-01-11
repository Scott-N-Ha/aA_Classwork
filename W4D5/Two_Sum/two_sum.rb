def bad_two_sum?(arr, target)
  for first in (0...arr.length - 1)
    for second in (first + 1...arr.length)
      return true if arr[first] + arr[second] == target
    end
  end
  false
end

# arr = [0, 1, 5, 7]
# p bad_two_sum?(arr, 6) # => should be true
# p bad_two_sum?(arr, 10) # => should be false

def okay_two_sum?(arr, target)
  temp = arr.sort
  front = 0
  back  = arr.length - 1
  until front  == back
    case arr[front] + arr[back] <=> target
    when -1
      front += 1
    when 0
      return true
    when 1
      back -= 1
    end
  end
  false
end

# arr = [0, 1, 5, 7]
# p okay_two_sum?(arr, 6) # => should be true
# p okay_two_sum?(arr, 10) # => should be false

def two_sum?(arr, target)
  hash = Hash.new

  arr.each do |el|
    difference = target - el
    if hash[difference]
      return true
    else
      hash[el] = true
    end
  end
  false
end

# el 5
# diff 1

# h [6, 1]


arr = [0, 1, 5, 7]
p two_sum?(arr, 6) # => should be true
p two_sum?(arr, 10) # => should be fal