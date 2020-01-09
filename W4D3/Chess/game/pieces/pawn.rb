require_relative "piece"

class Pawn < Piece
  WHITES = {  
    "forward" =>[1, 0],
    "right" =>[1, 1],
    "left" =>[1, -1]
  }

  BLACKS = [   
    "forward"=>[-1, 0],
    "right"=>[-1, 1],
    "left"=>[-1, -1]
  ]

  attr_reader :start_pos

  def moves_whites
    p_x, p_y = pos

    possible_pos = []

    WHITES.each do |k, d|
      d_x, d_y = d
      possible = [(p_x+d_x), (p_y+d_y)]
      
      if board.valid_pos?(possible)
        if k == "forward" && board[possible].is_a?(NullPiece)
          possible_pos << possible
        elsif (k == "left" || k == "right") && board[possible].color != color && !board[possible].is_a?(NullPiece)
          possible_pos << possible
        end
      end
    end
    possible_pos << [p_x + 2, p_y] if at_start_row?
    possible_pos
  end

  def moves_blacks
    p_x, p_y = pos

    possible_pos = []

    BLACKS.each do |k, d|
      d_x, d_y = d
      possible = [(p_x+d_x), (p_y+d_y)]

      if board.valid_pos?(possible)
        if k == "forward" && board[possible].is_a?(NullPiece)
          possible_pos << possible
        elsif (k == "left" || k == "right") && board[possible].color != color && !board[possible].is_a?(NullPiece)
          possible_pos << possible
        end
      end
    end
    possible_pos += [p_x + (-2), p_y] if at_start_row?
    possible_pos
  end

  def moves
    if color == :white
      moves_whites
    else
      moves_blacks
    end
  end

  private
  def at_start_row?
    (color == :white && pos[0] == 1) || (color == :black && pos[0] == 6)
  end

  def forward_dir
    1
  end

  def forward_steps
  end

  def side_attacks
  end
end