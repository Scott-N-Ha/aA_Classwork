require_relative 'p05_hash_map'
require_relative 'p04_linked_list'

class LRUCache
  def initialize(max, prc)
    @map = HashMap.new
    @store = LinkedList.new
    @max = max
    @prc = prc
  end

  def count
    @map.count
  end

  def get(key)
    if @map.include?(key) && @map.count >= @max
      node = @store.get(key)
      @store.remove(key)
      @store.append(key, node.val)
    else
      val = @prc.call(key)
      @map.set(key, val)
      @store.append(key, val)

      if @map.count > @max
        oldest_node = @store.front
        @map.delete(oldest_node.key)
        @store.remove(oldest_node.key)
      end
      val
    end
  end

  def to_s
    'Map: ' + @map.to_s + '\n' + 'Store: ' + @store.to_s
  end

  private

  def calc!(key)
    # suggested helper method; insert an (un-cached) key
  end

  def update_node!(node)
    # suggested helper method; move a node to the end of the list
  end

  def eject!
  end
end
