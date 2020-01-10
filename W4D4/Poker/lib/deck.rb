require_relative "card"

class Deck
    attr_accessor :store
    
    def initialize
        @store = []
        populate
    end

    def shuffle!
        @store.shuffle!
        self
    end

    def deal_card
        @store.pop
    end

    private
    def populate

        suits = ["♤","♧","♢","♡"]

        suits.each do |suit|
            (1..13).each do |value|
                store << Card.new(value, suit)
            end
        end
    end
end