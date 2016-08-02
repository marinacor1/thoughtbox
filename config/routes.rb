Rails.application.routes.draw do
  root 'links#index'

  get    "/login",                 to: "sessions#new"
  post   "/login",                 to: "sessions#create"
  delete "/logout",                to: "sessions#destroy"
  get    "/signup",                to: "users#new"

  get "welcome",                   to: "welcome#index"

  resources :users
  resources :links

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :links
      get '/sorted', to: "links#sorted"
    end
  end
end
