require 'rails_helper'

RSpec.describe '/posts', type: :request do
  describe 'PATCH /post/:id' do
    it 'updates the description' do
      post = Post.create!(name: "hi", description: "description")
      form_params = { description: "never gonna give you up" }
      patch post_url(post), params: form_params, as: :json
      expect(response).to have_http_status(:no_content)

      post.reload
      expect(post.description).to eq('never gonna give you up')
    end

    it 'updates the description when description is empty' do
      post = Post.create!(name: "hi", description: "description")
      form_params = { description: "" }
      patch post_url(post), params: form_params, as: :json
      expect(response).to have_http_status(:no_content)

      post.reload
      expect(post.description).to eq('')
    end

    # if we receive a nil value for the description, it's 
    # no good.  Something got mis-wired maybe?
    it 'fails if description is nil' do
      post = Post.create!(name: "hi", description: "description")
      form_params = { description: nil }
      patch post_url(post), params: form_params, as: :json
      expect(response).to have_http_status(:unprocessable_entity)
      post.reload
      expect(post.description).to eq('description')
    end

    it 'fails if the description key is missing' do
      post = Post.create!(name: "hi", description: "description")
      form_params = {}
      patch post_url(post), params: form_params, as: :json
      expect(response).to have_http_status(:unprocessable_entity)
      post.reload
      expect(post.description).to eq('description')
    end

    it 'fails if using a bad id' do
      post = Post.create!(name: "hi", description: "description")
      form_params = { description: "never gonna give you up" }
      patch post_url(post.id + 1), params: form_params, as: :json
      expect(response).to have_http_status(:not_found)
      post.reload
      expect(post.description).to eq('description')
    end
  end
end