require_relative "players/player.rb"
require_relative "board"
require_relative "display"
require 'byebug'

class Game
  attr_reader :board, :display
  def initialize
    @board = Board.new
    @display = Display.new(@board)
    @players = Hash.new
    @current_player
  end

  def play
    while true
      system("clear")
      display.render
      result = display.cursor.get_input
      
    end
  end

  private

  def notify_players

  end

  def swap_turn!
    
  end

end