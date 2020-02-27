class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params)
    if @user 
      login!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
    end
  end

  def destroy
    if logged_in? 
      logout!
    else
      render status: 404
    end
  end

  private
  
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
