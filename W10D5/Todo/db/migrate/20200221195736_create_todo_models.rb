class CreateTodoModels < ActiveRecord::Migration[5.2]
  def change
    create_table :todo_models do |t|
      t.string :title
      t.string :body
      t.boolean :done

      t.timestamps
    end
  end
end
