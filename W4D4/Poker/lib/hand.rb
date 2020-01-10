require_relative "deck"

class Hand
    # RANKING HASH
    # Key:   Procs 
    # Value: Rank Power

    # Royal Flush
    # Proc.new do |cards|
    #     cards.all?( |c| c.value == 1 || c.value.between?(10,13))
    #     cards.
    # end

    # RANKING_HASH = {
        
    # }

    attr_reader :our_cards
    def initialize(deck)
        @deck = deck
        @our_cards = []
        5.times {@our_cards << deck.deal_card}
    end

    def replace(num, unwanted)
        raise "Invalid request" unless num.between?(1,3)
        unless unwanted.all? { |card| our_cards.include?(card) }
            raise "Invalid cards" 
        end

        unwanted.each do |card|
            @our_cards.delete(card)
            @our_cards << @deck.deal_card
        end
    end

    # private
    def hand_suit
        our_suits = []
        our_cards.each do |card|
            our_suits << card.suit
        end
        our_suits.uniq.length == 1
    end
end