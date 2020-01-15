# == Schema Information
#
# Table name: nobels
#
#  yr          :integer
#  subject     :string
#  winner      :string

require_relative './sqlzoo.rb'

def physics_no_chemistry
  # In which years was the Physics prize awarded, but no Chemistry prize?
  execute(<<-SQL)
    SELECT
      DISTINCT(n.yr) AS yr
    FROM
    nobels n
    LEFT JOIN 
      (
        SELECT *
        FROM nobels
        WHERE subject = 'Chemistry'
      ) AS c ON c.yr = n.yr

    WHERE
      n.subject = 'Physics'
      AND c.yr IS NULL

  SQL
end