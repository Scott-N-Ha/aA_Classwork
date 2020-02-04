# == Schema Information
#
# Table name: subs
#
#  id           :bigint           not null, primary key
#  title        :string
#  description  :string
#  moderator_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Sub < ApplicationRecord
  validates :title, presence: true

  belongs_to :mod, foreign_key: :moderator_id, class_name: :User

  has_many :posts
end