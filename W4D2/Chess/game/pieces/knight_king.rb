require_relative "piece"

module Steppable
  def moves
  end

  private
  def move_diffs
    raise "KnightKing missing move_diffs"
  end
end

class KnightKing < Piece
  include Steppable

  def symbol

  end

  protected
  def move_diffs

  end
end