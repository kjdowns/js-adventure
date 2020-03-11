class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.integer :hp
      t.integer :x_position
      t.integer :y_position
      t.integer :speed
      t.integer :height
      t.integer :width

      t.timestamps
    end
  end
end
