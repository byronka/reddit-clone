class User < ApplicationRecord
    # a decent minimum length to foil brute-force attacks
    MINIMUM_PASSWORD_SIZE = 12.freeze

    # because come on, there has to some reasonable max
    MAXIMUM_PASSWORD_SIZE = 100.freeze

    # so the minimum might be their initials. 
    MINIMUM_USERNAME_SIZE = 3.freeze
    MAXIMUM_USERNAME_SIZE = 25.freeze

    has_secure_password
    validates :password, length: { minimum: MINIMUM_PASSWORD_SIZE, maximum: MAXIMUM_PASSWORD_SIZE }
    validates :username, presence: true, length: { minimum: MINIMUM_USERNAME_SIZE, maximum: MAXIMUM_USERNAME_SIZE }, uniqueness: true
end
