class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.integer :user_id, nil: false
      t.integer :question_id, nil: false
      t.text :response, nil: false

      t.timestamps
    end
  end
end
