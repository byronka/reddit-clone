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

  # following two tests are validation tests - in Ruby, the model
  # controls validation.  See models -> post.rb

  test "should fail to create post without a name" do
    expected_name = ''
    expected_description = 'Post description'

    # nothing should change in the database
    assert_difference("Post.count", 0) do
      post posts_url, params: { post: { name: expected_name, description: expected_description } }
    end
  
    # should get a 400 BAD_REQUEST
    assert_response :bad_request
    response_body = JSON.parse response.body

    # the api should have a status of success = false, with a nil id
    refute response_body["success"]
    assert_nil response_body["id"]
  end

  test "should delete all posts" do
    p = Post.create(name: "Fake Post 1", description: "Fake Post 1")
    Post.create(name: "Fake Post 2", description: "Fake Post 2")
    Post.create(name: "Fake Post 3", description: "Fake Post 3")
    Comment.create(value: 'my value', post: p)

    # ensure posts inserted into database
    assert_equal 3, Post.count

    get '/posts/delete_all'

    # should get 200 and { success: true }
    assert_response :no_content

    # should have deleted all posts
    assert_equal 0, Post.count
  end

  # so that when we show our Posts, we should show the most 
  # recently added post at the top of the list.
  test "should retrieve db entries in descending order" do
    expected_ids = 3.times.map do |i|
      p = Post.create(name: "Fake Post #{i}", description: "Fake Post #{i}")
      p.id
    end

    our_posts = get posts_url

    assert_equal(expected_ids.reverse, JSON.parse(response.body).map { |x| x["id"] })
  end



end
