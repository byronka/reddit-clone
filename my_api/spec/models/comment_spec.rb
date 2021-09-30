require 'rails_helper'

RSpec.describe Comment, type: :model do
  describe 'validations' do
    it 'is not valid nil value' do
      comment = Comment.new(value: nil)
      comment.save
      expect(comment.valid?).to be false
    end

    it 'is not valid with blank value' do
      comment = Comment.new(value: ' ')
      comment.save
      expect(comment.valid?).to be false
    end
  end

  describe '.for_post' do
    it 'returns comments for a post' do
      post = Post.create! name: 'Post', description: 'Description'

      comments = 5.times.map do |i|
        Comment.create! value: "comment #{i}", post: post
      end

      actual_comments = Comment.for_post(post)
      expect(actual_comments).to eq(comments)
    end
  end
end