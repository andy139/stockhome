class AddCashOnly < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :cash_only, :boolean
  end
end
