class UsersController < ApplicationController
before_action :authorize!, only: [:destroy]
def create
  @user = User.new(user_params)
  @user.secure_random
  if @user.save
    render json: {status: "success", redirect: true, auth_token: @user.authorization_token, }
  else
    render json: {errors: @user.organize_errors, status: "failed", redirect: false, message: "Please enter all correct information"}
  end
end

def destroy
    if current_user.destroy
      render json: { message: "Account Deleted", status: "success"}
    else
      render json: {message: "Could not delete account", status: "failed"}
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, :email)
  end

end
