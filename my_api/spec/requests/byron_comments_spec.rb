require 'rails_helper'

RSpec.describe '/comments', type: :request do

  describe 'POST /create' do

    context "with valid parameters" do
      it 'creates a new comment' do
        my_post = Post.create!(name: 'myPost', description: 'I am the description')
        expect {
          post comments_url, 
               params: { comment: { value: 'I am a comment', post_id: my_post.id} }  
        }.to change(Comment, :count).by(1)
      end

      it 'creates a new comment 2' do
          result = post comments_url, 
                        params: { comment: { value: 'I am a comment', post_id: '1'} }, as: :json

          print response
      end

      # it 'creates a new comment part 3' do
      #   puts ( post (comments_url, params: {value: 'I am a comment', post'1'}, as: :json))
      # end

    end

  end

end
