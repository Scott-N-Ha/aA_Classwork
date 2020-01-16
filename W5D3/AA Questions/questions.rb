require_relative "questionsdatabase.rb"
require_relative "users"
require_relative "replies"
require_relative "question_follows"
require_relative "question_likes"



class Question
  attr_accessor :title, :user_id, :body
  
  def self.all
    data = DB.instance.execute('SELECT * FROM questions')
    data.map { |datum| Question.new(datum) }
  end

  def self.find_by_id(id)
    question = DB.instance.execute(<<-SQL, id)
      SELECT *
      FROM questions
      WHERE id = ?
    SQL
    return nil unless question.length > 0
    Question.new(question.first)
  end

  def self.find_by_author(author_id)
    question = DB.instance.execute(<<-SQL, author_id)
      SELECT *
      FROM questions
      WHERE
        user_id = ?
    SQL
    question.map { |datum| Question.new(datum) }
  end

  def self.most_followed(n)
    QuestionFollow.most_followed_questions(n)
  end

  def self.most_liked(n)
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
    @title = options['title']
    @body = options['body']
    @user_id = options['user_id']
  end

  def create
    raise "Already created" if @id
    DB.instance.execute(<<-SQL, @title, @body, @user_id)
      INSERT INTO
        questions (title, body, user_id)
      VALUES
        (?,?,?)
    SQL
    @id = DB.instance.last_insert_row_id
  end

  def update
    raise  "Not created" unless @id
      DB.instance.execute(<<-SQL, @title, @body, @user_id, @id)     
      UPDATE
        questions
      SET
        title = ?,  body = ?, user_id = ?
      WHERE
        id = ?
    SQL
  end

  def author
    User.find_by_id(@user_id)
  end

  def replies 
    Reply.find_by_question_id(@id)
  end

  def followers
    QuestionFollow.followers_for_question_id(@id)
  end

  def likers
    QuestionLike.likers_for_question_id(@id)
  end

  def num_likes
    QuestionLike.num_likes_for_question_id(@id)
  end


end