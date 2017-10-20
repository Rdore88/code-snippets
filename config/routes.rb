Rails.application.routes.draw do

scope 'api' do
  resources :users, only: [:create, :destroy]
  resources :authorization, only: [:create, :destroy], controller: :authorization
end

get '/*path' => 'reactmounts#mount'
root :to => 'reactmounts#mount'
end
