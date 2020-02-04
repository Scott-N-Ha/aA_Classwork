# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string
#  session_token   :string
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :session_token, :password_digest, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  has_many :subs, foreign_key: :moderator_id

  has_many :posts, foreign_key: :author_id

  has_many :comments, foreign_key: :author_id

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user&.is_password?(password) ? user : nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password) 
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(64)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(64)
    self.save!
    self.session_token
  end

end
