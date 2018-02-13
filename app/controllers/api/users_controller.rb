class Api::UsersController < ApplicationController
  def create
    user = User.create(user_params)
    if user.save
      render json: {user_id: user.id}, status: 200
    else
      render json: {errors: user.errors.full_messages}, status: 422
    end
  end

  private 

  def user_params
    params.require(:user).permit(:first_name,
                                        :last_name,
                                        :email,
                                        :race,
                                        :age,
                                        :gender,
                                        :education,
                                        :language,
                                        :tos
                                       )
  end
end
