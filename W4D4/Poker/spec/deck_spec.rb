require "deck"

describe Deck do
    subject(:deck) { Deck.new }

    describe "#initialize" do
        it "should initialize a new deck" do
            expect{Deck.new}.to_not raise_error
        end

        it "should populate a new set of cards" do
            our_deck = []
            SUIT = ["♤","♧","♢","♡"]

            SUIT.each do |suit|
                (1..13).each do |value|
                    our_deck << Card.new(value, suit)
                end
            end

            expect(Deck.new.store).to eq our_deck
        end
    end

    describe "#shuffle!" do
        it "will shuffle the deck" do
            a = deck.store.dup
            expect(deck.shuffle!.store).to_not eq a
        end
        
        it "should modify the deck" do
            a = Deck.new
            expect(a.shuffle!.store.object_id).to eq a.store.object_id
        end
    end

    describe "#deal_card" do
        it "should deal the top card" do
            expect(deck.deal_card).to eq(Card.new(13, "♡"))
        end
        it "should reduce the number of cards" do
            deck.deal_card
            expect(deck.store.length).to eq (51)
        end
    end
end