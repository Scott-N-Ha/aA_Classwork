require "colorize"

KNIGHT_MOVES = [
  [1,-2],
  [2,-1],
  [1,2],
  [2,1],
  [-1,2],
  [-2,1],
  [-1,-2],
  [-2,-1]
]

starting_pos = [3,3]

chess_board = Array.new(8) { Array.new(8, " ") }

chess_board.each do |row|
  