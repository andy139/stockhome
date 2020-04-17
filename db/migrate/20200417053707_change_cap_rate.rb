class ChangeCapRate < ActiveRecord::Migration[5.2]


   def change
    change_column :properties, :cap_rate, :float

    
  end
end
