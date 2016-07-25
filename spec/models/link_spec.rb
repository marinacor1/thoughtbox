require 'rails_helper'

RSpec.describe Link, type: :model do
  it "will not save if url not complete" do
     expect(Link.count).to eq (0)

     Link.create(title: "search time")

     expect(Link.count).to eq (0)
  end

  it "will not save if title not complete" do
     expect(Link.count).to eq (0)

     Link.create(url: "www.google.com")

     expect(Link.count).to eq (0)
  end

  it "checks link for valid url" do
     expect(Link.count).to eq (0)

     Link.create(title: "search time", url: "http://www.google.com")

     expect(Link.count).to eq (1)
  end

  it "will not save link for invalid url" do
     expect(Link.count).to eq (0)

     Link.create(title: "search time", url: "www.googlsjfldsle.com")

     expect(Link.count).to eq (0)
  end

end
