class Api::QuestionsController < ApplicationController
  def create
    question = Question.create(question_params)
    if question.save
      render json: {success: true}, status: 200
    else
      render json: {errors: question.errors.full_messages}, status: 422
    end
    
  end

  private

  def question_params
    params.require(:question).permit(:user_id, :question_id, :response)
  end
end
