class Comment < ApplicationRecord
  validates_presence_of :value, message: 'Comment needs a text value' 
  
  belongs_to :post

  scope :for_post, ->(post) { where(post: post) }
end
