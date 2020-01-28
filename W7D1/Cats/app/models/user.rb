# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  user_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :user_name, :session_token, uniqueness: true 
  validates :user_name, :session_token, :password_digest, presence: true 

  has_many :cats, 
    foreign_key: :user_id, 
    class_name: :Cat

  def self.find_by_credentials(user_name, password)
    user = User.find_by(user_name: user_name)
    
    return user if user && user.is_password?(password)
    nil
  end  

  def reset_session_token! 
    self.update!(session_token: SecureRandom.urlsafe_base64(16))
    self.session_token
  end 

  def password=(password)
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
  end 

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password) 
  end 
end
