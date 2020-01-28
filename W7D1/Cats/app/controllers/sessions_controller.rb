class SessionsController < ApplicationController

  before_action :send_to_cats, only: [:new, :create]

  def new 
    render :new 
  end 

  def create 
    login_user!
  end 

  def destroy
    user = current_user
    if user
      user.reset_session_token!
      session[:session_token] = nil
      redirect_to cats_url
    end
  end

  # private 
  # def session_params
  #   params.require(:user).permit(:user_name, :password)
  # end 
end