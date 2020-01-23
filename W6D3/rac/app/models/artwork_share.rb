# == Schema Information
#
# Table name: artwork_shares
#
#  id         :bigint           not null, primary key
#  artwork_id :integer
#  viewer_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ArtworkShare < ApplicationRecord
  validates :artwork_id, :viewer_id, presence: true
  validate :shared

  belongs_to :viewer,
    foreign_key: :viewer_id,
    class_name: :User

  belongs_to :artwork,
    foreign_key: :artwork_id,
    class_name: :Artwork

    

  def shared
    artwork_share = ArtworkShare.find_by(artwork_id: self.artwork_id, viewer_id: self.viewer_id)
    if artwork_share
      errors[:artwork_id] << "Cannot share more than once"
    end
  end
end
