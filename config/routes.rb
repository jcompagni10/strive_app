Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: JSON } do
    resource :users, only: [:create, :index]
    resource :questions, only: [:create]
  end
end
