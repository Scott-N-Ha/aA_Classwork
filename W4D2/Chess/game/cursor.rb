require_relative "board"

class Cursor
  def initialize(cursor_pos, board)
    @board = board
    @cursor = cursor_pos
    @selected = true
  end

  def get_input
  end

  def toggle_selected
  end

  private
  attr_accessor :cursor_pos, :board, :selected

  def handle_key(key)
  end

  def read_char
  end

  def update_pos(diff)
  end
end