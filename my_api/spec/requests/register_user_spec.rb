require 'rails_helper'

RSpec.describe "RegisterUsers", type: :request do
  GOOD_PASSWORD = "398vqa44hw3avfwh908".freeze
  SHORT_PASSWORD = "a" * (User::MINIMUM_PASSWORD_SIZE-1)
  JUST_ENOUGH_PASSWORD = "a" * User::MINIMUM_PASSWORD_SIZE
  LONG_PASSWORD = "a" * (User::MINIMUM_PASSWORD_SIZE+1)

  describe "POST /register_user" do
    context "basic happy path - registering a new user" do
      it "should register a new user" do
        expect {
          post register_user_url, 
               as: :json,
               params: { username: 'byron', password: GOOD_PASSWORD }  
        }.to change(User, :count).by(1)
      end


      # should fail on small password
      # fail on empty password
      #fail on empty username
      # fail on registered user
      # fail on too long password (<100 chars)
      # allow usernames with spaces
      # allow usernames with unicode
      # usernames with spaces on either end get trimmed (i.e., "   jon " becomes "jon")
    end

    context "password is too short" do
      it "should not create a new user" do
        expect {
          post register_user_url, as: :json, params: { username: 'byron', password: SHORT_PASSWORD }  
        }.to_not change(User, :count)
      end

      it "should respond with 401" do
        post register_user_url, as: :json, params: { username: 'byron', password: SHORT_PASSWORD }  
        expect(response.status).to eq(401)
      end

      it "should respond with JSON error message" do
        post register_user_url, as: :json, params: { username: 'byron', password: SHORT_PASSWORD }  
        expect(JSON.parse(response.body)).to eq({"error" => "password too short"})
      end

    end
  end
end
