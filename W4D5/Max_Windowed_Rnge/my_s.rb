class MyStack
  def initialize
    @storage = []
  end

  def peek
    @storage.last
  end

  def size
    @storage.length
  end

  def empty?
    @storage.empty?
  end

  def pop
    @storage.pop
  end

  def push(arg)
    @storage << arg
  end
end