class Response < ApplicationRecord
  validates :user_id, :choice_id, presence: true
  validate :not_duplicate_response

  belongs_to :respondent,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :answer_choice,
    foreign_key: :choice_id,
    class_name: :AnswerChoice

  has_one :question,
    through: :answer_choice,
    source: :question

  # def not_duplicate_response
    
  # end

  def sibling_responses
    # question = self.question
    # arr_responses = question.responses

    Response
      .includes(:question)
      .where("responses.id != ?", @id)  #.not(id: @id)
  end

end
