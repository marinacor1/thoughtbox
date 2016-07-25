require 'rails_helper'

RSpec.describe User, type: :model do
  it "checks to make sure email addresses are not the same" do
     existing_user = User.create(email: "email@email.com", password: "password", password_confirmation: "password")

     new_user = User.create(email: "email@email.com", password: "password", password_confirmation: "password")

     expect(User.count).to eq(1)
  end

  it "checks to make sure all information is complete" do
     User.create(email: "email@email.com", password: "password")

    expect(User.count).to eq(0)
  end

  it "checks to make sure password and password confirmation are same" do
    User.create(email: "email@email.com", password: "password", password_confirmation: "password")

    expect(User.count).to eq(1)
  end

  it "will not save if password and password confirmation not matching" do
    User.create(email: "email@email.com", password: "pord", password_confirmation: "password")

    expect(User.count).to eq(0)

  end
end
