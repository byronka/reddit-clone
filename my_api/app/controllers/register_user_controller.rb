class RegisterUserController < ApplicationController


  def register
    user = User.new register_user_params
    if user.save
      return render(status: :ok)
    else
      return render(json: {error: "password too short"}, status: :unauthorized) 

    end 
  end

  private

  def register_user_params
    params.permit(:username, :password)
  end
end
