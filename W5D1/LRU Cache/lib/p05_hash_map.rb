require_relative 'p04_linked_list'

class HashMap
  include Enumerable
  attr_accessor :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { LinkedList.new }
    @count = 0
  end

  def include?(key)
    hash_key = key.hash 
    bucket = hash_key % num_buckets
    link_list = @store[bucket]
    link_list.include?(key)
  end

  def set(key, val)
    hash_key = key.hash 
    bucket = hash_key % num_buckets
    link_list = @store[bucket]
    if link_list.include?(key)
      link_list.update(key, val)
    else
      link_list.append(key, val)
      @count += 1
      resize! if @count == num_buckets
    end
  end

  def get(key)
    hash_key = key.hash 
    bucket = hash_key % num_buckets   
    @store[bucket].get(key)
  end

  def delete(key)
    hash_key = key.hash 
    bucket = hash_key % num_buckets
    link_list = @store[bucket]  
    link_list.remove(key)
    @count -= 1
  end

  def each
    container = []
    @store.each do |list|
      list.each do |node|
        yield [node.key, node.val]
      end
    end
    container
  end

  # uncomment when you have Enumerable included
  # def to_s
  #   pairs = inject([]) do |strs, (k, v)|
  #     strs << "#{k.to_s} => #{v.to_s}"
  #   end
  #   "{\n" + pairs.join(",\n") + "\n}"
  # end

  alias_method :[], :get
  alias_method :[]=, :set

  private

  def num_buckets
    @store.length
  end

  def resize!
    temp = Array.new(2 * @count) { LinkedList.new }
    @store.each do |list|
      list.each do |node|
        key_hash = node.key.hash
        bucket = key_hash % temp.length
        temp[bucket].append(node.key, node.val)
      end
    end
    @store = temp
  end

  def bucket(key)
    # optional but useful; return the bucket corresponding to `key`
  end
end
