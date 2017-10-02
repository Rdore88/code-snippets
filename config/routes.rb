Rails.application.routes.draw do

scope 'api' do
  resources :users, only: [:create, :destroy]
end

get '/*path' => 'reactmounts#mount'
root :to => 'reactmounts#mount'
end
