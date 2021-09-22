class PostsController < ApplicationController
  def index
    render(json: Post.select("id, name, description"))
  end

  def create
    post = Post.new(post_params)

    if post.save
      render(json: {success: true, id: post.id})
    else
      render(json: {success: false, id: nil}, :status => :bad_request)
    end
  end

  private
    def post_params
      params.require(:post).permit(:name, :description)
    end
end
