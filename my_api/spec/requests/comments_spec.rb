require 'rails_helper'

RSpec.describe '/comments', type: :request do

  describe 'GET /comments?post_id=5' do
    context('post has no comments') do
      it 'returns an empty list' do
        my_post = Post.create!(name: 'myPost', description: 'I am the description')
        get comments_url, params: { post_id: my_post.id }
        response_body = JSON.parse response.body

        expect(response_body['comments']).to eq([])
      end
    end

    context('post has one comment') do
      it 'returns list with one element' do
          my_post = Post.create!(name: 'myPost', description: 'I am the description')
          my_comment = Comment.create!(value: 'My comment', post: my_post)

          get comments_url, params: { post_id: my_post.id }
          response_body = JSON.parse response.body

          expect(response_body['comments']).to eq([{'id' => my_comment.id, 'value' => my_comment.value}])
      end
    end
  end

  describe 'POST /comments' do

    context "with valid parameters" do
      it 'creates a new comment' do
        my_post = Post.create!(name: 'myPost', description: 'I am the description')
        expect {
          post comments_url, 
               as: :json,
               params: { value: 'I am a comment', post_id: my_post.id }  
        }.to change(Comment, :count).by(1)
      end

      # it 'creates a new comment 2' do
      #     result = post comments_url, 
      #                   as: :json,
      #                   params: { value: 'I am a comment', post_id: '1' }
      # end

      # it 'creates a new comment part 3' do
      #   puts ( post (comments_url, params: {value: 'I am a comment', post'1'}, as: :json))
      # end

    end

  end

end
