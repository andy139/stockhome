class AddOffer < ActiveRecord::Migration[5.2]
  def change
    add_column :shopping_carts, :offered, :boolean
  end
end
