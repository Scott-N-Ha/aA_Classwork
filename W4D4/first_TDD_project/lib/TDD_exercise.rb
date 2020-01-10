def my_uniq(arr)
    storage = []

    arr.each do |el|
        storage << el unless storage.include?(el)
    end

    storage
end

class Array
    def two_sum
        storage = []

        self.each_with_index do |el, idx|
            self.each_with_index do |el2, idx2|
                storage << [idx, idx2] if el + el2 == 0 && idx < idx2
            end
        end

        storage.sort
    end
end


def my_transpose(arr)
    storage = []

    for col in (0...arr.length)
        new_row = []
        for row in (0...arr.length)
            new_row << arr[row][col]
        end
        storage << new_row
    end

    storage
end

# tesla = [1.00, 2.00, 4.00, 100.00, 0.50, 1.00]

def stockpicker(arr)
    difference_hash = Hash.new

    for first in (0...arr.length-1)
        for second in (first+1...arr.length)
            difference_hash[[first,second]] = arr[second] - arr[first]
        end
    end

    difference_hash.sort_by{|k,v| v}[-1][0]
end

class TowerOfHanoi
    attr_reader :game

    def initialize(game)
        @game = game
    end

    def valid_move?(starting_piece, ending_pos)
      game[ending_pos].empty? || starting_piece < game[ending_pos].first
    end
end