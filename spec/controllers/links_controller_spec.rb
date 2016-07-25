require 'rails_helper'

RSpec.describe Api::V1::LinksController do
  before(:each) do
     @link = Link.create(title: "Awesome link", url: "www.spacejam.com")
  end

  describe "Get index" do
    it "shows all links" do
      get :index, format: :json
      links_hash = JSON.parse(response.body, sybmolize_names: true)

      expect(response).to have_http_status(:success)
      expect(links_hash.first['title']).to eq("Awesome link")
      expect(links_hash.first['url']).to eq("www.spacejam.com")
    end

  end

end
