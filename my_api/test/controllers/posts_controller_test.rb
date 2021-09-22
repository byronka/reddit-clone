require "test_helper"

class PostsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get posts_url
    assert_response :success
  end

  test "should create post" do
    expected_name = 'Post name'
    expected_description = 'Post description'

    assert_difference("Post.count", 1) do
      post posts_url, params: { post: { name: expected_name, description: expected_description } }
    end
  
    # should get a 200 OK
    assert_response :success
    response_body = JSON.parse response.body

    # the api should have a status of success = true, with a non-nil id
    assert response_body["success"]
    refute_nil response_body["id"]

    # the database should have our new Post
    post = Post.find(response_body["id"])
    assert_equal expected_name, post.name
    assert_equal expected_description, post.description
  end
end
