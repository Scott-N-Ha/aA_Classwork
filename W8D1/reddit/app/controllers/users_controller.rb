class UsersController < ApplicationController
  before_action :require_login, only: %i{edit update destroy}

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show

    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render :show
    else 
      flash[:errors] = ["not a user"]
      redirect_to users_url
    end
  end

  def destroy
    @user = User.find_by(id: params[:id])
    @user.destroy
    redirect_to users_url
  end

  def edit
    @user = User.find_by(id: params[:id])
    render :edit
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update(user_params)
      render :show
    else 
      flash.now[:errors] = @user.errors.full_messages
      render :edit
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
