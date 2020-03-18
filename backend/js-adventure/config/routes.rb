Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :rooms, only: [:index] do
    resources :enemies, only: [:index]
  end
  resources :games, only: [:show, :update]
end
