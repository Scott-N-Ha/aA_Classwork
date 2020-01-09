require_relative "pieces/piece"
require_relative "pieces/pawn"
require_relative "pieces/rook_bishop_queen"
require_relative "pieces/knight_king"
require_relative "pieces/null_piece"

# load 'game/game.rb'

# g.board[([3,3])]
# g.board[([3,3])].horizontal_dirs
# g.board[([3,3])].diagonal_dirs

class Board
  
  attr_accessor :rows, :sentinel

  def initialize
    @sentinel = NullPiece.instance
    @rows = Array.new(8) { Array.new(8, @sentinel) }
    populate
  end

  def [](pos)
    rows[pos[0]][pos[1]]
  end

  def []=(pos, value)
    rows[pos[0]][pos[1]] = value
  end

  def move_piece(start_pos, end_pos)
    if valid_pos?(start_pos) && valid_pos?(end_pos)
      temp_piece = self[start_pos]
      if self[start_pos] != sentinel
        if temp_piece.moves.includes?(end_pos)
          self[end_pos] = self[start_pos]
          self[end_pos].pos = end_pos
          self[start_pos] = sentinel
        else
          raise "Piece cannot move this direction"
        end
      else
        raise "Invalid start piece"
      end
    else
      raise "Invalid Position, move positions"
    end
  end

  def valid_pos?(pos)
    x, y = pos
    x.between?(0, 7) && y.between?(0, 7)
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
  
  def inspect

  end

  private 

  def populate
    rows.each_with_index do |row, x|
      row.each_with_index do |col, y|
        case x
        when 0 
          rows[x][y] = return_piece([x, y], :white)
        when 1
          rows[x][y] = Pawn.new(:white, self, [x,y])
        when 6 
          rows[x][y] = Pawn.new(:black, self, [x,y])
        when 7
          rows[x][y] = return_piece([x, y], :black)
        end 
      end
    end
  end

  def return_piece(pos, color)
    piece = nil
    case pos[1]
    when 0
      piece = RookBishopQueen.new(color, self, pos)
    when 1
      piece = KnightKing.new(color, self, pos)
    when 2
      piece = RookBishopQueen.new(color, self, pos)
    when 3      
      piece = RookBishopQueen.new(color, self, pos)
    when 4
      piece = KnightKing.new(color, self, pos)
    when 5 
      piece = RookBishopQueen.new(color, self, pos)
    when 6 
      piece = KnightKing.new(color, self, pos)
    when 7
      piece = RookBishopQueen.new(color, self, pos)
    end
    return piece
  end
end
