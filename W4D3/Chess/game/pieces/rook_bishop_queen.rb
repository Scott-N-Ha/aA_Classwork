require_relative "piece"
require "byebug"
module Slideable
  def horizontal_dirs
    x, y = pos

    possible_pos = []

    (x+1..7).each do |i|
      new_pos = [i,y]
      # debugger
      if board[new_pos].is_a?(NullPiece)
        possible_pos << new_pos
      elsif board[new_pos].color == color
        break
      else
        possible_pos << new_pos
        break
      end
    end

    if x != 0
      (x-1).downto(0) do |i|
        new_pos = [i,y]
        if board[new_pos].is_a?(NullPiece)
          possible_pos << new_pos
        elsif board[new_pos].color == color
          break
        else
          possible_pos << new_pos
          break
        end
      end
    end

    (y+1..7).each do |i|
      new_pos = [x,i]
      if board[new_pos].is_a?(NullPiece)
        possible_pos << new_pos
      elsif board[new_pos].color == color
        break
      else
        possible_pos << new_pos
        break
      end
    end    

    if y != 0
      (y-1).downto(0) do |i|
        new_pos = [x,i]
        if board[new_pos].is_a?(NullPiece)
          possible_pos << new_pos
        elsif board[new_pos].color == color
          break
        else
          possible_pos << new_pos
          break
        end
      end
    end
  
    possible_pos
  end

  def diagonal_dirs
    x, y = pos

    # debugger

    possible_pos = []

    # downright
    until x >= 7 || y >= 7
      new_pos = [x+1,y+1]
      if board[new_pos].is_a?(NullPiece)
        possible_pos << new_pos
      elsif board[new_pos].color == color
        break
      else
        possible_pos << new_pos
        break
      end

      x += 1
      y += 1
    end
    
    x, y = pos
    # downleft
    
    
    until x == 8 || y < 0
      new_pos = [x,y]
      if board[new_pos].is_a?(NullPiece)
        possible_pos << new_pos
      elsif board[new_pos].color == color
        break
      else
        possible_pos << new_pos
        break
      end

      x += 1
      y -= 1
    end


    x, y = pos
    # upright

    until x < 0 || y == 8
      new_pos = [x,y]
      if board[new_pos].is_a?(NullPiece)
        possible_pos << new_pos
      elsif board[new_pos].color == color
        break
      else
        possible_pos << new_pos
        break
      end

      x -= 1
      y += 1
    end

    x, y = pos
    # upleft

    until x < 0 || y < 0
      new_pos = [x,y]
      if board[new_pos].is_a?(NullPiece)
        possible_pos << new_pos
      elsif board[new_pos].color == color
        break
      else
        possible_pos << new_pos
        break
      end

      x -= 1
      y -= 1
    end


    possible_pos
  end

  def moves
    if symbol == "♔"
      return horizontal_dirs + diagonal_dirs
    elsif symbol == "♗"
      diagonal_dirs
    else
      horizontal_dirs
    end
  end

  private
  @@horizontal_dirs = []
  @@diagonal_dirs = []

  def move_dirs
    raise "RookBishopQueen missing move_dirs"
  end

  def grow_unblocked_moves_in_dir(dx, dy)
  end
end

class RookBishopQueen < Piece
  include Slideable

  protected
  def move_dirs
  end
end