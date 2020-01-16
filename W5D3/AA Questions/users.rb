require_relative "questionsdatabase"
require_relative "questions"
require_relative "replies"
require_relative "question_follows"
require_relative "question_likes"


class User
       attr_accessor :fname, :lname
  
  def self.all
    data = DB.instance.execute('SELECT * FROM users')
    data.map { |datum| User.new(datum) }
  end

  def self.find_by_id(id)
  data = DB.instance.execute(<<-SQL, id)
      SELECT *
      FROM users
      WHERE id = ?
      SQL
    
    data.map {|datum| User.new(datum)}
  end

  def self.find_by_name(fname, lname)
    data = DB.instance.execute(<<-SQL, fname, lname)
    SELECT
      *
    FROM
      users
    WHERE
      fname = ? AND 
      lname = ?
    SQL
    data.map {|datum| User.new(datum)}

  end

  def initialize(options)
    @id = options['id']
    @fname = options['fname']
    @lname = options['lname']
  end

  def create
    raise "Already created" if @id
    DB.instance.execute(<<-SQL, @fname, @lname)
      INSERT INTO
        users (fname, lname)
      VALUES
        (?,?)
    SQL
    @id = DB.instance.last_insert_row_id
  end

  def update
    raise  "Not created" unless @id
      DB.instance.execute(<<-SQL, @fname, @lname, @id)    
      UPDATE
        users
      SET
        fname = ?,  lname = ?
      WHERE
        id = ?
    SQL
  end

  def authored_questions
   Question.find_by_author(@id)
  end

  def authored_replies
    Reply.find_by_user_id(@id)
  end

  def followed_questions
    QuestionFollow.followed_questions_for_user_id(@id)
  end

  def liked_questions
    QuestionLike.liked_questions_for_user_id(@id)
  end

  def average_karma
    total = 0
    questions = authored_questions
    return 0 if questions.empty?
    questions.each { |question| total += question.num_likes }
    total / questions.length * 1.0
  end
end