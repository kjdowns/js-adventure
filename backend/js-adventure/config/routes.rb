Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :rooms, only: [:index]
  resources :enemies, only: [:index]
end
