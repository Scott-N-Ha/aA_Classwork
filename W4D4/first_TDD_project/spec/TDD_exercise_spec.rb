require "TDD_exercise.rb"

describe "my_uniq" do
    it "removes duplicates from an array" do
        expect(my_uniq([1,2,3,3,4,4])).to eq [1,2,3,4]
    end
    
    it "does not modify original array" do
        a = [1,2,3,3,4,4]
        my_uniq(a)
        expect(a).to eq [1,2,3,3,4,4]
    end
end

describe "Array#two_sum" do
    it "returns the index positions of element that sum to 0 in numerical order" do
        expect([-1, 0, 2, -2, 1].two_sum).to eq [[0, 4], [2, 3]]
    end

end

describe "my_transpose" do
    it "should turn columns into rows, vice versa" do
        rows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
        ]
        cols = [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
        ]
        expect(my_transpose(rows)).to eq(cols)
    end
end


describe "stockpicker" do
    it "should return the most profitable pair of days" do
    tesla = [1.00, 2.00, 4.00, 100.00, 0.50, 1.00]
        expect(stockpicker(tesla)).to eq([0,3])
    end
end


describe "Towers of Hanoi" do
    subject(:towers) { TowerOfHanoi.new([[1, 2, 3],[],[]]) }

    describe "#initialize" do
        it "should initialize game, 3D array" do
            expect(towers.game).to eq [[1, 2, 3],[],[]]
        end
    end

    describe "#valid_move?" do
        it "should take in starting tower piece and ending tower position and check if valid move" do
            expect(towers.valid_move?(1, 1)).to eq true
        end
        it "should return false if ending position contains a piece less than the current" do
            towers.game = [[2, 3],[],[1]]
            expect(towers.valid_move?(2,2)).to
        end
    end
end