require "benchmark"
require "byebug"
def my_min(arr)
  arr.each do |el1|
    smallest = true
    arr.each do |el2|
      if el1 > el2
        smallest = false
        break
      end
    end
    return el1 if smallest
  end
end

def my_min2(arr)
  smallest = nil
  arr.each do |ele|
    smallest = ele if smallest.nil? || ele < smallest
  end
  smallest
end

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# Benchmark.benchmark do |b|
#  p b.report("terrible") {my_min(list)}
#  p b.report("single") {my_min2(list)}
# end

def largest_cont(list)
  return [[]] if list.length < 1

  current = [list.first]
  sub_list = largest_cont(list.drop(1))
  sub_list + sub_list.map { |el| current + el}
end

def largest_sum(list)
  sum = nil 
  list.each do |arr|
    unless arr.empty?
      sum = arr.sum if sum.nil? || arr.sum > sum 
    end
  end
  sum
end

def largest_sum2(list)
  sum = nil
  current = 0

  # debugger

  list.each do |ele|
    (sum.nil? || ele > sum) ? current = ele : current += ele 
    sum = current if sum.nil? || current >= sum
  end

  sum
end

list1 = [5, 3, -7]
list2 = [2, 3, -6, 7, -6, 7]
list3 = [-5, -1, -3]
 
# Benchmark.benchmark do |b|
#   p b.report("terrible") {largest_sum(largest_cont(list1))}
#   p b.report("") {largest_sum(largest_cont(list1))}
# end
p largest_sum2(list1)
p largest_sum2(list2)
p largest_sum2(list3)
