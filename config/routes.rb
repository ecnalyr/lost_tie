LostTie::Application.routes.draw do
  root :to => "home#index"

  resources :portfolio, :only => :index
  match '/portfolio' => 'portfolio#index'
end
