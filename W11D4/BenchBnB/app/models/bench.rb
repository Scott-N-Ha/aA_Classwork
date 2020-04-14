class Bench < ApplicationRecord
  def self.in_bounds(bounds)
    upperLat = bounds[:northEast][:lat]
    lowerLat = bounds[:southWest][:lat]
    upperLng = bounds[:northEast][:lng]
    lowerLng = bounds[:southWest][:lng]
    
    self
      .where('lat > ? AND lat < ? ', lowerLat, upperLat)
      .where('lng > ? AND lng < ?', lowerLng, upperLng)
  end
end