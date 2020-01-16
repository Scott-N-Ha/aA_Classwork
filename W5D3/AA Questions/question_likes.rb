require_relative "questionsdatabase.rb"
require_relative "users"
require_relative "questions"

class QuestionLike
     attr_accessor :question_id, :user_id
  
  def self.all
    data = DB.instance.execute('SELECT * FROM question_likes')
    data.map { |datum| QuestionLike.new(datum) }
  end

  def self.find_by_id(id)
    QuestionLike.new(DB.instance.execute(<<-SQL, id)
      SELECT *
      FROM question_likes
      WHERE id = ?
      SQL
    )
  end

  def self.likers_for_question_id(question_id)
    data = DB.instance.execute(<<-SQL, question_id)
      SELECT
        users.*
      FROM
        question_likes
        JOIN users ON question_likes.user_id = users.id
      WHERE
        question_likes.question_id = ?
    SQL
    data.map { |datum| User.new(datum) }
  end

  def self.num_likes_for_question_id(question_id)
    data = DB.instance.execute(<<-SQL, question_id)
      SELECT
        COUNT(question_likes.user_id) likes
      FROM
        question_likes
      WHERE
        question_likes.question_id = ?
    SQL
    data.first['likes'] if data.length > 0
    # data.map { |datum| User.new(datum) }
  end
  
  def self.liked_questions_for_user_id(user_id)
    data = DB.instance.execute(<<-SQL, user_id)
    SELECT
      q.*
    FROM
      question_likes ql 
    JOIN questions q ON ql.question_id = q.id
    WHERE 
      ql.user_id = ?
    SQL
    data.map {|datum| Question.new(datum)}
  end

  def self.most_liked_questions(n)
    data = DB.instance.execute(<<-SQL, n)
    SELECT
      q.*
    FROM
      question_likes ql 
    JOIN questions q ON ql.question_id = q.id
    WHERE
      ql.question_id IN ( 
        SELECT
          question_id
        FROM
          question_likes
        GROUP BY
          question_id
        ORDER BY
          COUNT(user_id) DESC
        LIMIT ?)
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
        question_likes (question_id, user_id)
      VALUES
        (?,?)
    SQL
    @id = DB.instance.last_insert_row_id
  end

  def update
    raise  "Not created" unless @id
      DB.instance.execute(<<-SQL, @question_id, @user_id, @id)    
      UPDATE
        question_likes
      SET
        question_id = ?,  user_id = ?
      WHERE
        id = ?
    SQL
  end
end