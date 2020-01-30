class SessionsController < ApplicationController
  def create
    if current_user
      log_in(current_user)
      redirect_to users_url
    else
      render :new
    end
  end
end
