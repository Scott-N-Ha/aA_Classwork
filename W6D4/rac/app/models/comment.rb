# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :string
#  user_id    :integer
#  artwork_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :user_id, :artwork_id, :body, presence: true

  belongs_to :user 
  belongs_to :artwork

  has_many :likes, as: :likeable
end
