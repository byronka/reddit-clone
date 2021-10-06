class Post < ApplicationRecord
    validates_presence_of :name, message: 'gimme a name' 
    validates :description, exclusion: { in: [ nil ], message: "cannot be nil" }

    has_many :comments

    #we added on delete cascade to the database, go check it out yall
end
