require_relative "piece"
require 'singleton'

class NullPiece < Piece
  include Singleton

  def initialize
    @color = :void
  end

  def symbol

  end

  def moves
  end
end