class SessionsController < ApplicationController
    def new
        render :new
    end

    def create
        @user = User.find_by_credentials(
            params[:username],
            params[:password]
        )
        if @user
            session[:session_token] = @user.reset_session_token!
            redirect_to users_url
        else
            flash.now[:errors] = @user.errors.full_messages
            render :new
        end
    end

    def destroy
        current_user.reset_session_token!
        @current_user = nil
        session[:session_token] = nil
        redirect_to users_url
    end
end
