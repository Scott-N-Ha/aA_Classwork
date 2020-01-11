require "byebug"

def anagram?(first_string, second_string)


end

def ana(word) # Extremely Terrible Method Phase 1
  return [word] if word.length == 1

  results = []
  word.each_with_index do |letter, idx|
    all_other_letters = word[0...idx] + word[idx+1..-1]

    variations = ana(all_other_letters)

    results << variations.map { |words| [letter] + words }
  end
  results 
end


def second_anagram?(first_string, second_string)
  first_string.each_char.with_index do |char, idx|
    unless second_string.chars.find_index(char).nil?
      second_string.delete!(char)
    end
  end
  second_string == ""
end

def third_anagram?(str1, str2)
  first_sort = str1.chars.sort # n log n
  second_sort = str2.chars.sort # n log n

  first_sort == second_sort
end

def fourth_anagram?(str1, str2)
  hash1 = Hash.new(0)
  str1.each_char {|c| hash1[c] += 1}
  str2.each_char {|c| hash1[c] -= 1}
  hash1.values.all? {|v| v == 0}
end



p fourth_anagram?("gizmo", "sally")    #=> false
p fourth_anagram?("elvis", "lives")    #=> true

