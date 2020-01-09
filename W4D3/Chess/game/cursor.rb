require "io/console"

KEYMAP = {
  " " => :space,
  "h" => :left,
  "j" => :down,
  "k" => :up,
  "l" => :right,
  "w" => :up,
  "a" => :left,
  "s" => :down,
  "d" => :right,
  "x" => :exit,
  "\t" => :tab,
  "\r" => :return,
  "\n" => :newline,
  "\e" => :escape,
  "\e[A" => :up,
  "\e[B" => :down,
  "\e[C" => :right,
  "\e[D" => :left,
  "\177" => :backspace,
  "\004" => :delete,
  "\u0003" => :ctrl_c,
}

MOVES = {
  left: [0, -1],
  right: [0, 1],
  up: [-1, 0],
  down: [1, 0]
}

class Cursor

  attr_reader :board
  attr_accessor :selected_pos, :cursor_pos

  def initialize(cursor_pos, board)
    @cursor_pos = cursor_pos
    @board = board
    @selected_pos = nil
  end

  def get_input
    key = KEYMAP[read_char]
    handle_key(key)
  end

  private

  def read_char
    STDIN.echo = false # stops the console from printing return values

    STDIN.raw! # in raw mode data is given as is to the program--the system
    # doesn't preprocess special characters such as control-c

    input = STDIN.getc.chr # STDIN.getc reads a one-character string as a
    # numeric keycode. chr returns a string of the
    # character represented by the keycode.
    # (e.g. 65.chr => "A")

    if input == "\e" then
      input << STDIN.read_nonblock(3) rescue nil # read_nonblock(maxlen) reads
      # at mostmaxlen bytesfrom a
      # data stream;it'snonblocking,
      # meaning themethod executes
      #asynchronously;it raises an
      # error if nodata isavailable,
      # hence theneed for rescue

      input << STDIN.read_nonblock(2) rescue nil
    end

    STDIN.echo = true # the console prints return values again
    STDIN.cooked! # the opposite of raw mode :)

    return input
  end

  def handle_key(key)
    case key
    when :up
      update_pos(MOVES[:up])
    when :down 
      update_pos(MOVES[:down])
    when :left 
      update_pos(MOVES[:left])
    when :right
      update_pos(MOVES[:right])
    when :space
      if @selected_pos.nil?
        @selected_pos = @cursor_pos
        return false
      else
        @selected_pos = nil
        return @cursor_pos
      end
    when :exit
      abort "child class has no rights"
    end

  end

  def update_pos(diff)
    # debugger
    p_x, p_y = @cursor_pos 
    d_x, d_y = diff
    x, y = [p_x + d_x, p_y + d_y]
    @cursor_pos = [x, y] if x.between?(0, 7) && y.between?(0, 7)
  end
end