class Api::V1::LinksController < ApplicationController
  respond_to :json

  def index
    respond_with Link.all
  end

  def create
    respond_with Link.create(link_params)
  end

  def update
    link = Link.find(params['id'])
    if link.update(link_params)
      link.save
      binding.pry
      #TODO doesnt know about unready
      render json: {response: "successful", title: "#{link.title}", url: "#{link.url}"
    else
      render json: {response: "failed"}
    end
  end

  def destroy
    respond_with Link.destroy(params[:id])
  end

  private

  def link_params
    params.permit(:title, :url, :unread)
  end
end
