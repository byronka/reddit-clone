require "test_helper"

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test 'valid Post' do
    post = Post.new(name: 'name', description: 'desc')
    assert post.valid?
  end
end
