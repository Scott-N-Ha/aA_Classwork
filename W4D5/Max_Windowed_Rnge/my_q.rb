class MyQueue
  def initialize
    @storage = []
  end

  def enqueue(el)
    @storage << el
  end

  def dequeue
    @storage.shift
  end

  def peek
    @storage.first
  end

  def size
    @storage.length
  end

  def empty?
    @storage.empty?
  end
end