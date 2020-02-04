# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                  subs_new GET    /subs/new(.:format)                                                                      subs#new
#                 subs_edit GET    /subs/edit(.:format)                                                                     subs#edit
#                 subs_show GET    /subs/show(.:format)                                                                     subs#show
#                subs_index GET    /subs/index(.:format)                                                                    subs#index
#                     users GET    /users(.:format)                                                                         users#index
#                           POST   /users(.:format)                                                                         users#create
#                  new_user GET    /users/new(.:format)                                                                     users#new
#                 edit_user GET    /users/:id/edit(.:format)                                                                users#edit
#                      user GET    /users/:id(.:format)                                                                     users#show
#                           PATCH  /users/:id(.:format)                                                                     users#update
#                           PUT    /users/:id(.:format)                                                                     users#update
#                           DELETE /users/:id(.:format)                                                                     users#destroy
#                 sub_posts GET    /subs/:sub_id/posts(.:format)                                                            posts#index
#                           POST   /subs/:sub_id/posts(.:format)                                                            posts#create
#              new_sub_post GET    /subs/:sub_id/posts/new(.:format)                                                        posts#new
#             edit_sub_post GET    /subs/:sub_id/posts/:id/edit(.:format)                                                   posts#edit
#                  sub_post GET    /subs/:sub_id/posts/:id(.:format)                                                        posts#show
#                           PATCH  /subs/:sub_id/posts/:id(.:format)                                                        posts#update
#                           PUT    /subs/:sub_id/posts/:id(.:format)                                                        posts#update
#                           DELETE /subs/:sub_id/posts/:id(.:format)                                                        posts#destroy
#                      subs GET    /subs(.:format)                                                                          subs#index
#                           POST   /subs(.:format)                                                                          subs#create
#                   new_sub GET    /subs/new(.:format)                                                                      subs#new
#                  edit_sub GET    /subs/:id/edit(.:format)                                                                 subs#edit
#                       sub GET    /subs/:id(.:format)                                                                      subs#show
#                           PATCH  /subs/:id(.:format)                                                                      subs#update
#                           PUT    /subs/:id(.:format)                                                                      subs#update
#                           DELETE /subs/:id(.:format)                                                                      subs#destroy
#               new_session GET    /session/new(.:format)                                                                   sessions#new
#                   session DELETE /session(.:format)                                                                       sessions#destroy
#                           POST   /session(.:format)                                                                       sessions#create
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # get 'posts/new'
  # get 'posts/edit'
  # get 'posts/show'
  # get 'posts/index'
  # get 'post/new'
  # get 'post/edit'
  # get 'post/show'
  # get 'post/index'
  # get 'subs/new'
  # get 'subs/edit'
  # get 'subs/show'
  # get 'subs/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users
  resources :subs do
    resources :posts do
      resources :comments
    end
  end

  resource :session, only: %i{new create destroy}
end
