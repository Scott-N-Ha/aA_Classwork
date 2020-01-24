# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  user_id       :integer
#  likeable_type :string
#  likeable_id   :bigint
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Like < ApplicationRecord
  validates :user_id, :likeable_id, presence: true
  validate :already_liked
  
  belongs_to :likeable, polymorphic: true
  belongs_to :user

  def already_liked
    like = Like.find_by(likeable_id: self.likeable_id, user_id: self.user_id, likeable_type: self.likeable_type)
    if like
      errors[:like] << "Cannot like more than once"
    end
  end
end
