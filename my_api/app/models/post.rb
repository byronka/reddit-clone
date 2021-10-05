class Post < ApplicationRecord
    validates_presence_of :name, message: 'gimme a name' 
    validates :description, exclusion: { in: [ nil ], message: "cannot be nil" }

    has_many :comments
end
