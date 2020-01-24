Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, except: [:edit, :new] do
    resources :artworks, only: [:index] do 
      resources :comments, only: [:index]
      resources :likes, only: [:index, :create, :destroy]
    end
    resources :comments, only: [:index]
    resources :likes, only: [:index]

    member do    
      get 'favorite' 
    end

    get 'search'

    collection do    
      get 'search'
    end
  end

  

  resources :artworks, except: [:index, :edit, :new] do 
    resources :comments, only: [:create, :destroy, :index] do   
      resources :likes, only: [:index, :create, :destroy]
    end
    resources :likes, only: [:index, :create, :destroy]
  end

  resources :artwork_shares, only: [:create, :destroy]
  
end
