require 'securerandom'

class Url < ApplicationRecord
  validates :long_url, :short_url, presence: true, uniqueness: true 

  def self.random_code
    new_short_url = SecureRandom.urlsafe_base64
    while Url.exists?(short_url:new_short_url)
      new_short_url = SecureRandom.urlsafe_base64
    end
    new_short_url
  end

  def shorten(user, url)
    self.long_url = url
    self.short_url = Url.random_code
    self.user_id = user.id
    self.create!
  end

end
