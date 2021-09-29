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
end