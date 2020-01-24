# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  name       :string
#  email      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ApplicationRecord
  validates :name, :email, presence: true, uniqueness: true
  
  has_many :artworks,
    foreign_key: :artist_id,
    class_name: :Artwork

  has_many :viewings,
    foreign_key: :viewer_id,
    class_name: :ArtworkShare

  has_many :shared_artworks,
    through: :viewings,
    source: :artwork

  has_many :comments,
    dependent: :destroy

  has_many :likes

  has_many :liked_artworks,
    through: :likes,
    source: :likeable,
    source_type: :Artwork 

  has_many :liked_comments,
    through: :likes,
    source: :likeable,
    source_type: :Comment

  has_many :collections

  has_many :collected_artworks,
    through: :collections,
    source: :artwork

end
