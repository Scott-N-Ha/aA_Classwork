#initialize - would need access to the deck, array to hold out cards
#replace - minus up to three, plus up to three(takes it in num)
#cal curr hand ranking
require "hand"

describe Hand do
    subject(:hand) {Hand.new(Deck.new)}
    describe "#initialize" do
        it "should take in a deck and draw five cards" do
            expect(hand.our_cards.length).to eq(5)
        end
    end

    describe "#replace" do
        it "should only accept a number from 1 to 3" do 
            expect{hand.replace(5, [Card.new(13, "♡")])}.to raise_error("Invalid request")
        end
        
        it "should raise error if unwanted cards are not in hand" do
            expect{hand.replace(1, [Card.new(1, "♡")])}.to raise_error("Invalid cards")
        end

        it "should allow the user to replace num amount of cards" do
            temp_hand = Deck.new.store[-6..-1]
            unwanted = [Card.new(13, "♡")]
            hand.replace(1, unwanted)
            expect(hand.our_cards).to_not eq(temp_hand)
        end
        
        it "should maintain a hand of five cards" do
            unwanted = [Card.new(13, "♡")]
            hand.replace(1, unwanted)
            expect(hand.our_cards.length).to eq(5)
        end
    end

    describe "#calc_rank" do

    end
end