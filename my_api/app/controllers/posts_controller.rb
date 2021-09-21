class PostsController < ApplicationController
  def index
    render(json: Post.select("id, name, description"))
  end
end
