Rails.application.routes.draw do
  root 'welcome#index'

  get    "/login",                 to: "sessions#new"
  post   "/login",                 to: "sessions#create"
  delete "/logout",                to: "sessions#destroy"
  get    "/signup",                to: "users#new"

  resources :link, only: [:index]
end
