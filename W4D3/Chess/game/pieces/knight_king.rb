require_relative "piece"

module Steppable
  KNIGHTS_DELTAS = [
    [2,1],
    [1,2],
    [2,-1],
    [1,-2],
    [-2,-1],
    [-1,-2],
    [-2,1],
    [-1,2]
  ]

  KING_DELTAS =[
    [-1,0],
    [-1,1],
    [0,1],
    [1,1],
    [1,0],
    [1,-1],
    [0,-1],
    [-1,-1]
  ]

  def moves
    if symbol == "♔"
      king_moves
    else
      knight_moves
    end
  end

  def knight_moves
    p_x, p_y = pos

    possible_pos = []

    KNIGHTS_DELTAS.each do |d|
      d_x, d_y = d
      possible = [(p_x+d_x), (p_y+d_y)]

      if board.valid_pos?(possible)
        if board[possible].color != color
          possible_pos << possible
        end
      end
    end

    possible_pos
  end

  def king_moves
    p_x, p_y = pos

    possible_pos = []

    KINGS_DELTAS.each do |d|
      d_x, d_y = d
      possible = [(p_x+d_x), (p_y+d_y)]

      if board.valid_pos?(possible)
        if board[possible].color != color
          possible_pos << possible
        end
      end
    end

    possible_pos
  end

  private
  def move_diffs
    raise "KnightKing missing move_diffs"
  end
end

class KnightKing < Piece
  include Steppable

  protected
  def move_diffs

  end
end