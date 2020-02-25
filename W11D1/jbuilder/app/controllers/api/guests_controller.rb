class Api::GuestsController < ApplicationController
  def index
    @guests = Guest.includes(:gifts).all.where('age > 40 AND age < 50')
    render :index
  end

  def show
    @guest = Guest.includes(:gifts).find_by(id: params[:id])
    render :show
  end
end
