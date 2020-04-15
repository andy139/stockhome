class CreateShoppingCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :shopping_carts do |t|
      t.integer "user_id", null: false
      t.integer "property_id", null: false
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false

      t.timestamps
    end

    add_index :shopping_carts, :property_id
    add_index :shopping_carts, :user_id
  end
end
