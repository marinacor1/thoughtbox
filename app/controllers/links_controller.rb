class LinksController < ApplicationController
  def index
    if current_user.nil?
      redirect_to welcome_path
    end
  end

end
