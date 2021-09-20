class PostsController < ApplicationController
  def index
    post = Post.new(name:'bob', description:'I am a description')
    render(json: post)
  end
end
