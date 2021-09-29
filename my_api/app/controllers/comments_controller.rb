class CommentsController < ApplicationController

  # GET /comments/1
  def show
    comment = Comment.find(params[:id])
    render json: comment
  end

  # POST /comments
  def create
    comment = Comment.new(comment_params)

    if comment.save
      render json: comment, status: :created, location: comment
    else
      render json: comment.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:value, :post_id)
    end
end
