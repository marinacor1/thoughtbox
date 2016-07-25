require 'rails_helper'

RSpec.feature "user can login with existing account info"  do
  it "shows index page when authenticated" do
    user = User.create(email: "myemail@email.com", password: "password", password_confirmation: "password")

    visit root_path

    expect(page).to have_content "Login or Sign Up"

    click_on "Login"

    expect(current_path).to eq login_path
    fill_in "Email:", with: "myemail@email.com"
    fill_in "Password:", with: "password"
    click_on "Log In"

    expect(current_path).to eq links_path
  end
end
