class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    hash_key = key.hash
    bucket = hash_key % num_buckets
    @store[bucket] << hash_key
    @count += 1
    resize! if @count == num_buckets
  end

  def include?(key)
    hash_key = key.hash
    bucket = hash_key % num_buckets
    @store[bucket].include?(hash_key)
  end

  def remove(key)
    if include?(key)
      @count -= 1
      hash_key = key.hash
      bucket = hash_key % num_buckets
      @store[bucket].delete(hash_key)
    end
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
    temp = Array.new(@count * 2) {Array.new}
    @store.each do |bucket|
      bucket.each do |ele|
        temp[ele % (temp.length)] << ele
      end
    end
    @store = temp
  end
end
