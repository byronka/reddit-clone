class PostsController < ApplicationController
  def index
    render(json: Post.select("id, name, description").order(id: :desc))
  end

  def create
    post = Post.new(post_params)

    if post.save
      render(json: {success: true, id: post.id})
    else
      render(json: {success: false, id: nil}, :status => :bad_request)
    end
  end

  def update
    post = Post.find_by(id: params[:id])

    if post.nil?
      return render(status: :not_found)
    end

    if (!post.update(description: params[:description]))
      return render(json: { errors: post.errors.messages[:description] }, status: :unprocessable_entity)
    end
  end

  def show
    post = Post.find(params[:id])
    render(json: { id: post.id, name: post.name, description: post.description })
  end

  def delete_all
    Post.delete_all
  end

  private
    def post_params
      params.require(:post).permit(:name, :description)
    end
end
