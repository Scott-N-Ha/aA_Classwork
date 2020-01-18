

  create_table "actors", force: :cascade do |t|
    t.string "name", null: false
    t.index ["name"], name: "index_actors_on_name"
  end



  create_table "castings", force: :cascade do |t|
    t.integer "actor_id", null: false
    t.integer "movie_id", null: false
    t.integer "ord", null: false
    t.index ["actor_id", "movie_id"], name: "index_castings_on_actor_id_and_movie_id", unique: true
    t.index ["actor_id"], name: "index_castings_on_actor_id"
    t.index ["movie_id"], name: "index_castings_on_movie_id"
  end




  create_table "movies", force: :cascade do |t|
    t.string "title", null: false
    t.integer "yr", null: false
    t.float "score", null: false
    t.integer "votes", null: false
    t.integer "director_id", null: false
    t.index ["director_id"], name: "index_movies_on_director_id"
    t.index ["title"], name: "index_movies_on_title"
  end

end
