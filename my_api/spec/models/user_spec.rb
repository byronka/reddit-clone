require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'regular user behavior' do

    it 'should create a new user' do
      user = User.create!(username:'jon', password:'mypass')

      # If they succeed, they get a user.  failure returns *false*
      expect(user.authenticate('blah')).to eq(false)
      expect(user.authenticate('mypass')).to eq(user)
    end
  end
end
