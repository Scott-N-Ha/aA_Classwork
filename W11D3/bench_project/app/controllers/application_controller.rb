class ApplicationController < ActionController::Base

  skip_before_action :verify_authenticity_token

  helper_method :current_user, :logged_in? 

  def current_user

    @current_user || User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout!
    current_user.try(:reset_session_token!)
    session[:session_token] = nil
  end


  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
    
  end
end