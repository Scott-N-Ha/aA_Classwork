class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    arr = [self.length]
    self.each_with_index do |ele, idx|
      arr << 0
      arr << ele
    end
    arr.join.to_i
  end
end

class String
  def hash
    alpha = ('a'..'z').to_a
    arr = [self.length]
    self.each_char.with_index do |char, idx|
      arr << 0
      arr << alpha.index(char)
    end
    arr.join.to_i
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    alpha = ('a'..'z').to_a
    arr = [self.length]

    self.values.sort.each { |ele| arr << alpha.index(ele) }
    self.keys.sort.each { |ele| arr << alpha.index(ele.to_s) }

    # self.each do |k, v|
    #   arr << alpha.index(k)

    #   if v.is_a?(Integer)
    #     arr << v
    #   else
    #     arr << alpha.index(v)
    #   end

    # end

    arr.join.to_i
  end
end
