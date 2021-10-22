Rails.application.routes.draw do
  resources :comments
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  if (Rails.env != 'production')
    get '/posts/delete_all', to: 'posts#delete_all'
  end

  resources :posts

  resources :comments

  post '/register_user', to: 'register_user#register', as: :register_user

  # resources :posts do
  #   resources :comments
  # end

  # resources :posts do
  #   resources :comments, only: [:index, :new, :create]
  # end
  # resources :comments, only: [:show, :edit, :update, :destroy]

  # resources :posts do
  #   resources :comments, shallow: true
  # end

end
