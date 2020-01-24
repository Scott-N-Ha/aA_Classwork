# == Schema Information
#
# Table name: artworks
#
#  id         :bigint           not null, primary key
#  title      :string
#  image_url  :string
#  artist_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  favorite   :boolean
#

class Artwork < ApplicationRecord
  validates :title, :image_url, :artist_id, presence: true
  validate :artwork_title

  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :User

  has_many :shares,
    foreign_key: :artwork_id,
    class_name: :ArtworkShare

  has_many :shared_viewers,
    through: :shares,
    source: :viewer

  has_many :comments,
    dependent: :destroy

  has_many :likes, as: :likeable

  has_many :collections

  def artwork_title
    artwork = Artwork.find_by(artist_id: self.artist_id, title: self.title)
    if artwork
      errors[:title] << "Artist can't have two artworks of the same title"
    end
  end
end
