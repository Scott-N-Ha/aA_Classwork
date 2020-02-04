# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  content    :string
#  author_id  :integer
#  post_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord

  belongs_to :post

  belongs_to :author, foreign_key: :author_id, class_name: :User

end
