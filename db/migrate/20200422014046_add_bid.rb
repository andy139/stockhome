class AddBid < ActiveRecord::Migration[5.2]
  def change
    add_column :shopping_carts, :bid, :float
  end
end
