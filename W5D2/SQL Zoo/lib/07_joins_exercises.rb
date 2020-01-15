# == Schema Information
#
# Table name: actors
#
#  id          :integer      not null, primary key
#  name        :string
#
# Table name: movies
#
#  id          :integer      not null, primary key
#  title       :string
#  yr          :integer
#  score       :float
#  votes       :integer
#  director_id :integer
#
# Table name: castings
#
#  movie_id    :integer      not null, primary key
#  actor_id    :integer      not null, primary key
#  ord         :integer

require_relative './sqlzoo.rb'

def example_join
  execute(<<-SQL)
    SELECT
      *
    FROM
      movies
    JOIN
      castings ON movies.id = castings.movie_id
    JOIN
      actors ON castings.actor_id = actors.id
    WHERE
      actors.name = 'Sean Connery'
  SQL
end

def ford_films
  # List the films in which 'Harrison Ford' has appeared.
  execute(<<-SQL)
  select
    m.title
  from
    actors a
    inner join 
    castings c on c.actor_id = a.id
      inner join
      movies m on m.id = c.movie_id
  where
    a.name = 'Harrison Ford'
  SQL
end

def ford_supporting_films
  # List the films where 'Harrison Ford' has appeared - but not in the star
  # role. [Note: the ord field of casting gives the position of the actor. If
  # ord=1 then this actor is in the starring role]
  execute(<<-SQL)
  select
    m.title
  from
    actors a
    inner join 
    castings c on c.actor_id = a.id AND c.ord != 1
      inner join
      movies m on m.id = c.movie_id
  where
    a.name = 'Harrison Ford'
  SQL
end

def films_and_stars_from_sixty_two
  # List the title and leading star of every 1962 film.
  execute(<<-SQL)
  select
    title, name
  from movies m
    inner join 
    castings c on c.movie_id = m.id AND c.ord = 1
     inner join
     actors a on a.id = c.actor_id
  where
    m.yr = 1962
  SQL
end

def travoltas_busiest_years
  # Which were the busiest years for 'John Travolta'? Show the year and the
  # number of movies he made for any year in which he made at least 2 movies.
  execute(<<-SQL)
      select
        m.yr, COUNT(title)
      from
        movies m
        inner join
        castings c on c.movie_id = m.id
          inner join 
          actors a on c.actor_id = a.id
      where
        a.name = 'John Travolta'
      group by
        m.yr
      having
        COUNT(title) >= 2
  SQL
end

def andrews_films_and_leads
  # List the film title and the leading actor for all of the films 'Julie
  # Andrews' played in.
  execute(<<-SQL)
    SELECT
      title
      , name
    FROM
      actors a
      INNER JOIN castings c ON c.actor_id = a.id
      INNER JOIN movies m ON c.movie_id = m.id
    WHERE
      title IN (
        SELECT
          m.title
        FROM
          actors a
          INNER JOIN castings c ON c.actor_id = a.id
          INNER JOIN movies m ON c.movie_id = m.id
        WHERE
          a.name = 'Julie Andrews')
      AND ord = 1
  SQL
end

def prolific_actors
  # Obtain a list in alphabetical order of actors who've had at least 15
  # starring roles.
  execute(<<-SQL)
    SELECT
      name
    FROM
      actors a
      INNER JOIN castings c ON c.actor_id = a.id
    WHERE
      ord = 1
    GROUP BY
      name
    HAVING
      COUNT(ord) >= 15
    ORDER BY
      name
  SQL
end

def films_by_cast_size
  # List the films released in the year 1978 ordered by the number of actors
  # in the cast (descending), then by title (ascending).
  execute(<<-SQL)
  select
    title, COUNT(c.actor_id) AS actor_count
  from
    movies
    inner join
      castings c on c.movie_id = movies.id
  where
    yr = 1978
  group by
    title
  order by
    actor_count DESC,
    title ASC
  
  SQL
end

def colleagues_of_garfunkel
  # List all the people who have played alongside 'Art Garfunkel'.
  execute(<<-SQL)
  select
    a.name
  from
    actors a
    inner join
      castings c on a.id = c.actor_id
  where
    c.movie_id IN (
      select
        c.movie_id
      from
        actors a
        inner join
          castings c on c.actor_id = a.id
      where
        name = 'Art Garfunkel'
    )
    AND name != 'Art Garfunkel'
  SQL
end
