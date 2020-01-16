require_relative 'questionsdatabase.rb'
require_relative "questions"
require_relative "users"


class Reply
  attr_accessor :question_id, :parent_reply_id, :user_id, :body
  
  def self.all
    data = DB.instance.execute('SELECT * FROM replies')
    data.map { |datum| Reply.new(datum) }
  end

  def self.find_by_id(id)
    replies = DB.instance.execute(<<-SQL, id)
      SELECT *
      FROM replies
      WHERE id = ?
      SQL
    replies.map {|reply| Reply.new(reply) }
  end

  def self.find_by_user_id(user_id)
    reply = DB.instance.execute(<<-SQL, user_id)
      SELECT *
      FROM replies
      WHERE user_id = ?
    SQL
    reply.map { |rep| Reply.new(rep) }
  end

  def self.find_by_question_id(question_id)
    data = DB.instance.execute(<<-SQL, question_id)
        SELECT *
        FROM replies
        WHERE question_id = ?
      SQL
    data.map { |datum| Reply.new(datum) }
  end

  def initialize(options)
    @id = options['id']
    @question_id = options['question_id']
    @parent_reply_id = options['parent_reply_id']
    @user_id = options['user_id']
    @body = options['body']
  end

  def create
    raise "Already created" if @id
    DB.instance.execute(<<-SQL, @question_id, @parent_reply_id, @user_id, @body)
      INSERT INTO
        replies (question_id, parent_reply_id, user_id, body)
      VALUES
        (?,?,?,?)
    SQL
    @id = DB.instance.last_insert_row_id
  end

  def update
    raise  "Not created" unless @id
    DB.instance.execute(<<-SQL, @question_id, @parent_reply_id, @user_id, @body, @id)
      UPDATE
        replies
      SET
        question_id = ?, parent_reply_id = ?, user_id = ?, body = ?
      WHERE
        id = ?
    SQL
  end

  def author
    User.find_by_id(@user_id)
  end

  def question
   Question.find_by_id(@question_id)
  end

  def parent_reply 
    Reply.find_by_id(@parent_reply_id)
  end

  def child_replies
    data = DB.instance.execute(<<-SQL, @id)
    SELECT
      *
    FROM
      replies
    WHERE parent_reply_id = ?
    SQL
    data.map { |datum| Reply.new(datum) }
  end

end