class AddTotalReturn < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :total_return_5yrs, :float
  end
end
