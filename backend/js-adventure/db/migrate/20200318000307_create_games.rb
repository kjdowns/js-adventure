class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :username
      t.integer :hp
      t.integer :current_level

      t.timestamps
    end
  end
end
