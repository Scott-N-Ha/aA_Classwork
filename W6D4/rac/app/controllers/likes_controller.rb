class LikesController < ApplicationController

  def index
    user = User.find(params[:user_id])
    render json: user.liked_artworks + user.liked_comments
  end

  def create
    # render json: params
    if params.has_key?(:comment_id)
      like = Like.new(user_id: params[:user_id], likeable: Comment.find(params[:comment_id]))
    elsif params.has_key?(:artwork_id)
      like = Like.new(user_id: params[:user_id], likeable: Artwork.find(params[:artwork_id]))
    end
    begin 
      if like.save
        render json: like
      else  
        render json: like.errors.full_messages, status: 422
      end
    rescue 
      render status: 418
    end
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :likeable_id)
  end
end
