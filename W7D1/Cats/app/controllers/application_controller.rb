class ApplicationController < ActionController::Base
  helper_method :current_user, :login_user!, :logged_in?
  
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in? 
    !!current_user 
  end 

  def login_user! 
    @user = User.find_by_credentials(params[:user][:user_name], 
      params[:user][:password])
    if @user
      session[:session_token] = @user.reset_session_token!
      redirect_to cats_url 
    else 
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end 

  def send_to_cats 
    redirect_to cats_url if logged_in?
  end 

end
