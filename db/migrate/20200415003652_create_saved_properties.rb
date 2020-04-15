class CreateSavedProperties < ActiveRecord::Migration[5.2]
   def change
    create_table :saved_properties do |t|
      t.integer "user_id", null: false
      t.integer "property_id", null: false
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false

      t.timestamps
    end

    add_index :saved_properties, :property_id
    add_index :saved_properties, :user_id
  end
end
