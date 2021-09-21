class PostsController < ApplicationController
  def index
    render(json: Post.select("id, name, description"))
  end

  def create
    render(json: {"success": true})
  end
end
