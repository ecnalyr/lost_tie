LostTie::Application.routes.draw do
  root :to => "home#index"

  match "/contact" => redirect("/contact-us")

  resources :portfolio, :only => :index
  match '/portfolio' => 'portfolio#index'
end
