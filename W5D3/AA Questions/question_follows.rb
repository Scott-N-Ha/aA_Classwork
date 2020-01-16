require_relative "questionsdatabase.rb"
require_relative "users"
require_relative "questions"

class QuestionFollow
     attr_accessor :question_id, :user_id
  
  def self.all
    data = DB.instance.execute('SELECT * FROM question_follows')
    data.map { |datum| QuestionFollow.new(datum) }
  end

  def self.find_by_id(id)
    data = DB.instance.execute(<<-SQL, id)
      SELECT *
      FROM question_follows
      WHERE id = ?
      SQL
    data.map { |datum| QuestionFollow.new(datum) }
  end

  def self.followers_for_question_id(question_id)
    data = DB.instance.execute(<<-SQL, question_id)
      SELECT
        users.* -- excluding question_follows table, only users table
      FROM
        question_follows
        JOIN users ON question_follows.user_id = users.id
      WHERE
        question_follows.question_id = ?
    SQL
    data.map { |datum| User.new(datum) }
  end

  def self.followed_questions_for_user_id(user_id)
    data = DB.instance.execute(<<-SQL, user_id)
    SELECT
      questions.* -- excluding question_follows table, only questions table
    FROM question_follows
      JOIN questions ON question_follows.question_id = questions.id
    WHERE
      question_follows.user_id = ?
    SQL
    data.map { |datum| Question.new(datum) }
  end

  def self.most_followed_questions(n)
    data = DB.instance.execute(<<-SQL, n)
    SELECT
      DISTINCT q.*
    FROM
      question_follows qf
      JOIN questions q ON qf.question_id = q.id
      WHERE
       qf.question_id IN (
                      SELECT
                      qf.question_id
                      FROM
                      question_follows qf
                      GROUP BY
                      qf.question_id
                      ORDER BY
                      COUNT(qf.user_id) DESC
                      LIMIT ?
                  )
    SQL
    data.map {|datum| Question.new(datum)}
  end

  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @user_id = options['user_id']
  end

  def create
    raise "Already created" if @id
    DB.instance.execute(<<-SQL, @question_id, @user_id)
      INSERT INTO
        question_follows (question_id, user_id)
      VALUES
        (?,?)
    SQL
    @id = DB.instance.last_insert_row_id
  end

  def update
    raise  "Not created" unless @id
      DB.instance.execute(<<-SQL, @question_id, @user_id, @id)    
      UPDATE
        question_follows
      SET
        question_id = ?,  user_id = ?
      WHERE
        id = ?
    SQL
  end
end
