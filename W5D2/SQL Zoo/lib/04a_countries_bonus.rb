# == Schema Information
#
# Table name: countries
#
#  name        :string       not null, primary key
#  continent   :string
#  area        :integer
#  population  :integer
#  gdp         :integer

require_relative './sqlzoo.rb'

def highest_gdp
  # Which countries have a GDP greater than every country in Europe? (Give the
  # name only. Some countries may have NULL gdp values)
  execute(<<-SQL)
    SELECT
      name
    FROM
      countries
    WHERE
      gdp > 
      (SELECT
        MAX(gdp) AS total_gdp
      FROM countries
      WHERE continent LIKE 'Europe')
  SQL
end

def largest_in_continent
  # Find the largest country (by area) in each continent. Show the continent,
  # name, and area.
  execute(<<-SQL)
    SELECT
      d.continent, name, d.cont_max
    FROM (SELECT
        continent, MAX(area) AS cont_max
      FROM countries
      GROUP BY continent) d
      JOIN countries c ON d.continent = c.continent AND d.cont_max = c.area
  SQL
end

def large_neighbors
  # Some countries have populations more than three times that of any of their
  # neighbors (in the same continent). Give the countries and continents.
  execute(<<-SQL)
    SELECT
      c.name
      , c.continent
    FROM countries c
    WHERE 
      c.population > 3 * (
        SELECT MAX(d.population)
        FROM countries d
        WHERE d.name != c.name
          AND d.continent = c.continent
      )
  SQL
end

