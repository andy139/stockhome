class DeleteColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :properties, :state
    
  end

  def change
    add_column :properties, :municipality, :string
    add_index :properties, :municipality
    
  end
end
