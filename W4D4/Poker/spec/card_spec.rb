require "card"

describe Card do 
    describe "#initialize" do 
        it "should take in value and suit" do 
            expect{Card.new(1,"♤")}.to_not raise_error
        end
        it "should raise error if the value is invalid" do
            expect{Card.new(15,"♤")}.to raise_error("Invalid value")
        end
        it "should raise error if the suit is invalid" do
            expect{Card.new(1,"🥰")}.to raise_error("Invalid suit")
        end
    end
end