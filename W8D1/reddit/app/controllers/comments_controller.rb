class CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id 
    @comment.post_id = params[:post_id]
    unless @comment.save
      flash.now[:errors] = @comment.errors.full_messages
    end
    redirect_to sub_post_url(sub_id: params[:sub_id], id: params[:post_id])
  end

  def comment_params
    params.require(:comment).permit(:content)
  end

  def edit
    @comment = current_user.comments.find_by(id: params[:id])
    render :edit
  end

  def update
    @comment = current_user.comments.find_by(id: params[:id])
    if @comment.update(comment_params)
      redirect_to sub_post_url(sub_id: params[:sub_id], post_id: params[:post_id])
    end
  end



end
