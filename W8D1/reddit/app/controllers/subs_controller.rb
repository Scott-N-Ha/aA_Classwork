class SubsController < ApplicationController
  def new
  end

  def edit
  end

  def show
    @sub = Sub.find_by(id: params[:id])
    
    if @sub
      render :show
    else 
      flash[:errors] = ['Not a SubReddit']
    end
  end

  def index
    @subs = Sub.all
    render :index
  end
end
