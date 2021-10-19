require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'regular user behavior' do

    it 'should create a new user' do
      user = User.create!(usename:'jon',password:'mypass',salt:'mysalt')
    end

  end
end
