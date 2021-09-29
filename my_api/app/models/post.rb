class Post < ApplicationRecord
    validates_presence_of :name, message: 'gimme a name' 
    validates_presence_of :description, message: 'gimme a description' 

    has_many :comments
end
