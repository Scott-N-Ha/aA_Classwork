class Piece
  attr_writer :pos

  def initialize(color, board, pos)
    @color = color
    @board = board
    @pos = pos
  end

  def to_s

  end

  def empty?
  
  end

  def valid_moves

  end

  def symbol

  end

  private 
  attr_accessor :color, :board
  attr_reader :pos

  def move_into_check?(end_pos)

  end
end