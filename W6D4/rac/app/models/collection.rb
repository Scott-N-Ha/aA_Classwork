# == Schema Information
#
# Table name: collections
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  artwork_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Collection < ApplicationRecord
  validates :name, :user_id, :artwork_id, presence: true
  validate :already_added

  belongs_to :user  
  
  belongs_to :artwork  

  def already_added
    artwork = Collection.find_by(artwork_id: self.artwork_id, user_id: self.user_id, name: self.name)
    if artwork
      errors[:name] << "Cannot collect more than once"
    end
  end
end
