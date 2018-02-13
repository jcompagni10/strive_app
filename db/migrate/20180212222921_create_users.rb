class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :first_name, nil: false
      t.string :last_name, nil: false
      t.string :email, nil: false
      t.string :race, nil: false
      t.integer :age, nil: false
      t.string :gender, nil: false
      t.string :education, nil: false
      t.string :language, nil: false
      t.boolean :tos, nil: false

      t.timestamps
    end
  end
end
