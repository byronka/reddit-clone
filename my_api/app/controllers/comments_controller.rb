class CommentsController < ApplicationController
  def index
    comments = Comment.for_post(params[:post_id])
    render json: {comments: comments.select("id, value") }
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
