class AddUniqueEmailsAndUrLs < ActiveRecord::Migration[5.2]
  def change
    add_index :urls, :short_url, unique: true
    add_index :urls, :long_url, unique: true
    remove_index :users, :email
    add_index :users, :email, unique: true
  end
end
