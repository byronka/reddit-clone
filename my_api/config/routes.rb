Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  if (Rails.env != 'production')
    get '/posts/delete_all', to: 'posts#delete_all'
  end

  resources :posts
end
