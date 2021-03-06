class CreateCollections < ActiveRecord::Migration[5.2]
  def change
    create_table :collections do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
      t.integer :artwork_id, null: false
      t.timestamps
    end
  end
end
