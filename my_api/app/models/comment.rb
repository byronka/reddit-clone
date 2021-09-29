class Comment < ApplicationRecord
  validates_presence_of :value, message: 'Comment needs a text value' 
  
  belongs_to :post
end
