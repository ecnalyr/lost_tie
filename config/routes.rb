LostTie::Application.routes.draw do
  root :to => "home#index"
  
  resources :contact, :only => :index
  match '/contact' => 'contact#index'
end
