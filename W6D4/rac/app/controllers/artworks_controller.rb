class ArtworksController < ApplicationController
  def index
    render json: Artwork.where(artist_id: params[:user_id]) + User.find(params[:user_id]).shared_artworks
  end

  def show
    artwork = Artwork.find(params[:id])
    if artwork   
      render json: artwork 
    else  
      render status: 418
    end
  end

  def update
    artwork = Artwork.find(params[:id])
    if Artwork.update(artwork_params)
      render json: artwork 
    else  
      render json: Artwork.errors.full_messages, status: 420
    end
  end

  def destroy
    artwork = Artwork.find(params[:id]).destroy
    render json: artwork 
  end

  def create
    artwork = Artwork.new(artwork_params)
    if Artwork.save
      render json: artwork
    else
      render json: artwork.errors.full_messages, status: 422
    end
  end

  private
  def artwork_params
    params.require(:artwork).permit(:title, :artist_id, :image_url)
  end
end
