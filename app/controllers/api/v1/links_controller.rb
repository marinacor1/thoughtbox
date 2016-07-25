class Api::V1::LinksController < ApplicationController
  respond_to :json

  def index
    respond_with Link.all
  end

  def create
    binding.pry
    respond_with Link.create(link_params)
  end

  def update
    binding.pry
    link = Link.find(params['id'])
    if link.update(link_params)
      link.save
      render json: {response: "successful", title: "#{link.title}", url: "#{link.url}", unread: "#{link.unread}"}
    else
      render json: {response: "failed"}
    end
  end


  private

  def link_params
    params.require(:post).permit(:title, :url, :unread)
  end
end
