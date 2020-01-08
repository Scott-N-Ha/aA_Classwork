require_relative "cursor"
# require_relative "board"

class Display
  
  def initialize(board)
    @board = board
    @cursor = Cursor.new(nil, nil)
  end

  def render
  end

end