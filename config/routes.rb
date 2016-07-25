Rails.application.routes.draw do
  root 'welcome#index'

  get    "/login",                 to: "sessions#new"
  post   "/login",                 to: "sessions#create"
  delete "/logout",                to: "sessions#destroy"
  get    "/signup",                to: "users#new"

  resources :users
  resources :links, only: [:index]

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :links
    end
  end
end
