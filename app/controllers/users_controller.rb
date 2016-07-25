class UsersController < ApplicationController
  before_action :logged_in_user, except: [:new, :create]

  def new
    @user = User.new
  end

  def create
    @user = User.create(params_check)
    if @user.save
      session[:user_id] = @user.id
      redirect_to links_path
    else
      redirect_to signup_path
    end
  end

  private

    def params_check
      params.require(:user).permit(:email, :password, :password_confirmation)
    end

end
