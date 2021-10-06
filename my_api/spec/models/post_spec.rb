require 'rails_helper'

RSpec.describe Post, type: :model do
    describe 'referential integrity' do

        it 'should delete all comments when deleted' do
            post = Post.create! name: 'name', description: 'desc'
            comment = Comment.create! value: 'value', post: post
            expect(comment.valid?).to be true
            expect(post.valid?).to be true

            post.delete

            expect(Post.find_by(id: post.id)).to be nil
            expect(Comment.find_by(id: comment.id)).to be nil
        end
    end
end