require_relative "pieces/piece"

class Board

  def initialize
    @rows = Array.new(8) { Array.new(8) }
    @sentinel = NullPiece.new # come back to
  end

  def [](pos)
    rows[pos[0]][pos[1]]
  end

  def []=(pos, value)
    rows[pos[0]][pos[1]] = value
  end

  def move_piece(color, start_pos, end_pos)

  end

  def valid_pos?(pos)

  end

  def add_piece(piece, pos)

  end

  def checkmate?(color)

  end

  def in_check?(color)

  end

  def find_king(color)

  end

  def pieces

  end

  def dup

  end
  
  private 
  attr_accessor :rows

  def populate
    rows.each_with_index do |row, x|
      row.each_with_index do |col, y|
        case [x, y]
        when 
        end
      end
    end
  end

end