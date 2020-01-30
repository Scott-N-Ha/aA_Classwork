# spec/features/auth_spec.rb

require 'spec_helper'
require 'rails_helper'

feature 'the signup process' do
    scenario 'has a new user page' do
        visit new_user_path
        expect(page).to have_content('New User')
    end
end

feature 'signing up a user' do
    scenario 'shows username on the homepage after signup' do
        visit new_user_path
        fill_in "Username:", with: "Helen"
        fill_in "Password:", with: 'password'
        click_button "Sign Up!"
        expect(page).to have_content("Helen")
        expect(current_path).to eq(user_path(User.find_by(username: 'Helen').id))
    end
end

feature 'logging in' do
    scenario 'shows username on the homepage after login' do
        User.create(username: 'Helen', password: 'password')
        visit new_session_path
        fill_in "Username:", with: "Helen"
        fill_in "Password:", with: 'password'
        click_button "Sign In"
        expect(page).to have_content("Helen")
        expect(current_path).to eq(users_path)
    end
end

feature 'logging out' do
    scenario 'begins with a logged out state' do
        User.create(username: 'Helen', password: 'password')
        visit new_session_path
        fill_in "Username:", with: "Helen"
        fill_in "Password:", with: 'password'
        click_button "Sign In"
        click_button "Sign Out"
        expect(current_path).to eq(users_path)
        expect(page).to_not have_content("Helen")
    end

  scenario 'doesn\'t show username on the homepage after logout'

end