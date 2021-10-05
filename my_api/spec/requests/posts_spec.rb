require 'rails_helper'

RSpec.describe '/posts', type: :request do
  describe 'PATCH /post/:id' do
    it 'updates the description' do
      post = Post.create!(name: "hi", description: "description")
      form_params = { description: "never gonna give you up" }
      patch post_url(post), params: form_params, as: :json
      response_json = JSON.parse(response.body)

      expect(response.status).to eq(:success)

      post.reload
      expect(post.description).to eq('never gonna give you up')
    end
  end
end
