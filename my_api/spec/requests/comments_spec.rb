# require 'rails_helper'

# RSpec.describe "/comments", type: :request do

#   describe "GET /index" do
#     it "renders a successful response" do
#       myPost = Post.create! { name: 'I am a name', description: 'this is my description'}
#       Comment.create! {value: 'I am a great comment!', post: myPost}
#       get comments_url, headers: valid_headers, as: :json
#       expect(response).to be_successful
#     end
#   end

#   describe "GET /show" do
#     it "renders a successful response" do
#       comment = Comment.create! valid_attributes
#       get comment_url(comment), as: :json
#       expect(response).to be_successful
#     end
#   end

#   describe "POST /create" do
#     context "with valid parameters" do
#       it "creates a new Comment" do
#         expect {
#           post comments_url,
#                params: { comment: valid_attributes }, headers: valid_headers, as: :json
#         }.to change(Comment, :count).by(1)
#       end

#       it "renders a JSON response with the new comment" do
#         post comments_url,
#              params: { comment: valid_attributes }, headers: valid_headers, as: :json
#         expect(response).to have_http_status(:created)
#         expect(response.content_type).to match(a_string_including("application/json"))
#       end
#     end

#     context "with invalid parameters" do
#       it "does not create a new Comment" do
#         expect {
#           post comments_url,
#                params: { comment: invalid_attributes }, as: :json
#         }.to change(Comment, :count).by(0)
#       end

#       it "renders a JSON response with errors for the new comment" do
#         post comments_url,
#              params: { comment: invalid_attributes }, headers: valid_headers, as: :json
#         expect(response).to have_http_status(:unprocessable_entity)
#         expect(response.content_type).to eq("application/json")
#       end
#     end
#   end

#   describe "PATCH /update" do
#     context "with valid parameters" do
#       let(:new_attributes) {
#         skip("Add a hash of attributes valid for your model")
#       }

#       it "updates the requested comment" do
#         comment = Comment.create! valid_attributes
#         patch comment_url(comment),
#               params: { comment: new_attributes }, headers: valid_headers, as: :json
#         comment.reload
#         skip("Add assertions for updated state")
#       end

#       it "renders a JSON response with the comment" do
#         comment = Comment.create! valid_attributes
#         patch comment_url(comment),
#               params: { comment: new_attributes }, headers: valid_headers, as: :json
#         expect(response).to have_http_status(:ok)
#         expect(response.content_type).to match(a_string_including("application/json"))
#       end
#     end

#     context "with invalid parameters" do
#       it "renders a JSON response with errors for the comment" do
#         comment = Comment.create! valid_attributes
#         patch comment_url(comment),
#               params: { comment: invalid_attributes }, headers: valid_headers, as: :json
#         expect(response).to have_http_status(:unprocessable_entity)
#         expect(response.content_type).to eq("application/json")
#       end
#     end
#   end

#   describe "DELETE /destroy" do
#     it "destroys the requested comment" do
#       comment = Comment.create! valid_attributes
#       expect {
#         delete comment_url(comment), headers: valid_headers, as: :json
#       }.to change(Comment, :count).by(-1)
#     end
#   end
# end
