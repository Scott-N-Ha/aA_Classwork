class PostsController < ApplicationController
  before_action :require_login, only: %i(new create edit update destroy)

  def new
    @post = Post.new
    @sub = Sub.find_by(id: params[:sub_id])
    render :new
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    @post.sub_id = params[:sub_id]

    if @post.save
      redirect_to sub_post_url(sub_id: params[:sub_id], id: @post.id)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :new 
    end
  end

  def edit
    @post = current_user.posts.find_by(id: params[:id])
    if @post && @post.author_id == current_user.id
      render :edit
    else 
      flash.now[:errors] = ["Can't Find Post"]
      redirect_to sub_post_url(sub_id: params[:sub_id], id: params[:id])
    end
  end

  def update
    @post = current_user.posts.find_by(id: params[:id])
    if @post.update!(post_params)
      redirect_to sub_post_url(sub_id: params[:sub_id], id: params[:id])
    else 
      flash.now[:errors] = @post.errors.full_messages
      render :edit
    end
  end

  def show
    @post = Post.includes(:sub).includes(:author).find_by(id: params[:id])

    render :show
  end

  def index
  end

  private
  def post_params
    params.require(:post).permit(:title, :url, :content, :author_id, :sub_id)
  end
end
