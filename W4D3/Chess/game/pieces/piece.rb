class Piece
  attr_writer :pos
  attr_reader :color, :symbol

  def initialize(color, board, pos)
    @color = color
    @board = board
    @pos = pos
    
    if pos[0] == 1 || pos[0] == 6
      @symbol = "♙"
    elsif pos[1] == 0 || pos[1] == 7
      @symbol = "♖"
    elsif pos[1] == 1 || pos[1] == 6
      @symbol = "♘"
    elsif pos[1] == 2 || pos[1] == 5
      @symbol =  "♗"
    elsif pos[1] == 3 
      @symbol = "♕"
    elsif pos[1] == 4
      @symbol = "♔"
    end
  end

  def to_s

  end

  def empty?
  
  end

  def valid_moves

  end

  def moves

  end

  private 
  attr_accessor :board
  attr_reader :pos

  def move_into_check?(end_pos)

  end
end