class Api::GiftsController < ApplicationController
  def index
    @gifts = Gift.where(guest_id: params[:guest_id])
    render :index
    # render json: @gifts
  end

  def show
    @gift = Gift.find_by(id: params[:id])
    render :show
  end
end
