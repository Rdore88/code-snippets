class AuthorizationController < ApplicationController
  before_action :authroize!, only: [:destroy]

  def create
    @user = User.find_by(email: params[:user][:email])
    if @user && @user.authenticate(params[:user][:password])
      render json: {auth_token: @user.authorization_token, status: "success", redirect: true}
    else
      render json: {message: "Email or Password is not correct", status: "failed"}
    end
  end

  def destroy
    current_user.logout
    render json: {message: "Your logged out"}
  end
end
