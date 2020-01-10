class Card
    SUIT = ["♤","♧","♢","♡"]

    attr_reader :suit, :value
    def initialize(value, suit)
        raise "Invalid value" unless value.between?(1,13)
        raise "Invalid suit" unless SUIT.include?(suit)
        @value = value
        @suit = suit
    end

    def ==(another_card)
        value == another_card.value && suit == another_card.suit
    end
end