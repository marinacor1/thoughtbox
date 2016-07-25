class Api::V1::LinksController < ApplicationController
  skip_before_action :verify_authenticity_token
  respond_to :json

  def index
    respond_with Link.all
  end

  def show
    respond_with Link.find(params[:id])
  end

  def create
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
    if params[:post]
      params.require(:post).permit(:title, :url, :unread)
    else
      params.permit(:title, :url, :unread)
    end
  end
end
