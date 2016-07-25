require 'rails_helper'

RSpec.feature "user can create account and login"  do
  it "shows index page when authenticated" do
    visit root_path

    expect(page).to have_content "Login or Sign Up"

    click_on "Sign Up"

    expect(current_path).to eq signup_path
    fill_in "Email", with: "email@email.com"
    fill_in "Password", with: "password"
    fill_in "Password Confirmation", with: "password"
    click_on "Create Account"

    expect(current_path).to eq links_path
  end

  it "will not allow you to create account if passwords do not match" do
    visit root_path

    expect(page).to have_content "Login or Sign Up"

    click_on "Sign Up"

    expect(current_path).to eq signup_path
    fill_in "Email", with: "email@email.com"
    fill_in "Password", with: "password"
    fill_in "Password Confirmation", with: "password1"
    click_on "Create Account"

    expect(current_path).to eq root_path
  end

  it "will not allow you to create account if email already exists" do
    user = User.create(email: "myemail@email.com", password: "password", password_confirmation: "password")

    visit root_path
    
    expect(page).to have_content "Login or Sign Up"

    click_on "Sign Up"

    expect(current_path).to eq signup_path
    fill_in "Email", with: "myemail@email.com"
    fill_in "Password", with: "password"
    fill_in "Password Confirmation", with: "password1"
    click_on "Create Account"

    expect(current_path).to eq root_path
  end
end
