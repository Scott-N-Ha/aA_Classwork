class Node
  attr_reader :key
  attr_accessor :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
  end
end

class LinkedList
  include Enumerable

  def initialize
    @head = Node.new(:head, :head)
    @tail = Node.new(:tail, :tail)
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    @head.next == @tail && @tail.prev == @head
  end

  def get(key)
    each do |node|
      return node.val if key == node.key
    end
  end

  def include?(key)
    each do |node|
      return true if node.key == key
    end
    false
  end

  def append(key, val)
    new_node = Node.new(key, val)
    prev_node = @tail.prev
    prev_node.next = new_node
    new_node.prev = prev_node
    new_node.next = @tail
    @tail.prev = new_node
  end

  def update(key, val)
    each do |node|
      if node.key == key
        node.val = val
        return true
      end
    end
    false
  end

  def remove(key)
    each do |node|
      if node.key == key
        prev_node = node.prev
        prev_node.next = node.next
        next_node = node.next
        next_node.prev = prev_node
        return true
      end
    end
    false
  end

  def each
    current_node = @head.next
    until current_node == @tail
      yield current_node
      current_node = current_node.next
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end
end
