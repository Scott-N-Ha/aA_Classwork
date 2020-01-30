class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  helper_method :current_user, :logged_in?, :log_in, :logout
  
  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session_token[:session_token])
  end

  def log_in(user)
    session[:session_token] = user.reset_session_token!
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token!
    session_token[:session_token] = nil
    redirect_to new_session_url
  end

  def require_login
    redirect_to new_session_url unless logged_in?
  end
end
