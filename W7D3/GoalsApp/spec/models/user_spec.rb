require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  subject(:user) { User.create(username: 'user', password: 'password') }

  it { should validate_presence_of(:username) }
  it { should validate_uniqueness_of(:username) }

  it 'does not store the password in the database' do
    user_2 = User.find(user.id)
    expect(user_2.password).to be(nil)
  end

  it 'is_password? returns true with correct password' do
    expect(user.is_password?('password')).to be(true)
  end

  it 'encypts a password_digest' do
    # expect(BCrypt::Password).to receive(:create).with('password')
    # User.new(username: 'Steve', password: 'password')
    expect(user.password_digest).to_not be('password')
  end

  it 'ensures a session token' do
    expect(user.session_token).to_not be(nil)
  end

  it 'reset_session_token sets, saves, and returns a session token' do
    token = user.session_token
    expect(user.reset_session_token!).to_not eq(token)
  end

  it 'finds a user if credentials are valid' do
    new_user = User.create(username: 'Steve', password: 'password')
    expect(User.find_by_credentials('Steve', 'password')).to be_present
  end
end
