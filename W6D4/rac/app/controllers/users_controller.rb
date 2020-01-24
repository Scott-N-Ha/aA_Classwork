class UsersController < ApplicationController
  def index
    
    if params.has_key?(:name)
      render json: User.where("upper(name) LIKE upper('#{params[:name]}')")
    else 
      render json: User.all
    end
  end

  def show
    user = User.find(params[:id])
    if user   
      render json: user 
    else  
      render status: 418
    end
  end

  def update
    user = User.find(params[:id])
    if user.update(user_params)
      render json: user 
    else  
      render json: user.errors.full_messages, status: 420
    end
  end

  def destroy
    user = User.find(params[:id]).destroy
    render json: user 
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: user.errors.full_messages, status: 422
    end
  end

  def favorite
    render json: Artwork.where(artist_id: params[:id], favorite: true)
  end

  def search
    render json: params
  end
   

  private
  def user_params
    params.require(:user).permit(:name, :email)
  end
end
