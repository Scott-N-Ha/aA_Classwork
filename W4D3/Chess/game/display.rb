require_relative "cursor"
require_relative "board"
require "colorize"

class Display
  attr_reader :board, :cursor

  def initialize(board)
    @board = board
    @cursor = Cursor.new([3, 3],board)
  end

  def render
    # print_arr = []

    board.rows.each_with_index do |row, x|
      temp = row.map.with_index do |p, y|
        printed_char = ""

        if p.is_a?(NullPiece)
          printed_char= " "
        elsif p.color == :white
          printed_char = p.symbol.blue
        else
          printed_char = p.symbol.red
        end

        if cursor.cursor_pos == [x, y]
          printed_char = printed_char.colorize(:background => :yellow)
        end

        printed_char
      end
      puts temp.join("|")
    end




    # x, y = cursor.cursor_pos
    # print_arr[x][y] = print_arr[x][y].colorize(:background => :red) 
    # print_arr.each { |row| puts row.join("|") }
    
    nil
  end

end