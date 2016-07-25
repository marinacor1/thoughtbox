require 'rails_helper'

RSpec.describe Api::V1::LinksController do
  before(:each) do
    @link = Link.create(title: "Awesome link", url: "www.spacejam.com")
     @links =  Link.create(title: "Coolio link", url: "www.mtv.com"),
               Link.create(title: "Alright link", url: "www.nike.com")
  end

  describe "Get index" do
    it "shows all links" do
      get :index, format: :json
      links_hash = JSON.parse(response.body, symbolize_names: true)

      expect(response).to have_http_status(:success)
      expect(links_hash.first[:title]).to eq("Awesome link")
      expect(links_hash.first[:url]).to eq("www.spacejam.com")
      expect(links_hash.last[:title]).to eq("Alright link")
      expect(links_hash.last[:url]).to eq("www.nike.com")
    end
  end

  describe "creates a link" do
    it "adds a new link" do
      expect(Link.count).to eq(3)
      post :create, format: :json, post: {title: "Bad ass link yo", url: "www.hotmail.com"}

      expect(response).to have_http_status(:success)
      expect(Link.count).to eq(4)
    end
  end

  # describe "Updates link" do
  #   it "updates a single link" do
  #     get :update, format: :json, id: @link.id
  #     links_hash = JSON.parse(response.body, symbolize_names: true)
  #
  #     expect(response).to have_http_status(:success)
  #     expect(links_hash.first[:title]).to eq("Awesome link")
  #     expect(links_hash.first[:url]).to eq("www.spacejam.com")
  #   end
  # end

end
