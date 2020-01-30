require 'rails_helper'

RSpec.describe UsersController, type: :controller do
    let(:valid_params) do 
        { user: {
        username: 'Amy',
        password: 'password'
        }}
    end

    let(:invalid_params) do
        { user: {
        username: "",
        password: "z"
        }}
    end

    subject(:user) do
        User.create(username: 'Steve', password: 'password')
    end

    it 'GET new' do
        get :new
        expect(response).to render_template(:new)
    end

    describe 'POST create' do
        context 'with valid params' do
            
            it 'logs the user in' do
                post :create, params: valid_params
                new_user = User.find_by(username: 'Amy')
                expect(session[:session_token]).to eq(new_user.session_token)
            end

            it 'redirects to the user\'s show page' do
                post :create, params: valid_params
                new_user = User.find_by(username: 'Amy')
                expect(response).to redirect_to(users_url(new_user))
            end
        end

        context 'with inavlid params' do
            it 'renders form again with errors' do
                post :create, params: invalid_params
                expect(response).to render_template(:new)
                expect(flash.now[:errors]).to be_present
            end
        end
    end

    it 'GET index' do
        get :index
        expect(response).to render_template(:index)
    end

    it 'GET show' do
        get :show, params: {id: user.id}
        expect(response).to render_template(:show)
    end

    describe 'PATCH update' do
        context 'with valid params' do
            it 'redirects to user page' do
                new_user = User.create(username: 'Amy', password: 'password')
                post :update, params: {
                    id: new_user.id, 
                    user: {
                        username: "Aimee"
                    }}
                expect(response).to redirect_to(users_url(new_user))
            end
        end

        context 'with invalid params' do
            it 'renders new form with errors' do
                new_user = User.create(username: 'Amy', password: 'password')
                post :update, params: {
                    id: new_user.id, 
                    user: {
                        username: ""
                    }}
                expect(response).to render_template(:edit)
                expect(flash.now[:errors]).to be_present
            end
        end
    end

    it 'GET edit' do
        get :edit, params: {id: user.id}
        expect(response).to render_template(:edit)
    end

    it 'DELETE destroy' do
        new_user = User.create(username: "Alice", password: 'password')
        delete :destroy, params: {id: new_user.id}
        expect{User.find(new_user.id)}.to raise_error
    end
end
