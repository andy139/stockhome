Rails.application.routes.draw do

  root to: 'static_pages#root'


  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy, :show]
    resources :properties, only: [:index, :show, :create]
    resources :saved_properties, only: [:index, :show, :create, :destroy]
    resources :carts, only: [:index, :show, :create, :destroy]
  end

  


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
