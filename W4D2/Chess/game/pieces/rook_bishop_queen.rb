require_relative "piece"

module Slideable
  def horizontal_dirs
  end

  def diagonal_dirs
  end

  def moves
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

  def initialize
    super
  end

  def symbol

  end

  protected
  def move_dirs
  end
end