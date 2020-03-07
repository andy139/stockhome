class CreateProperty < ActiveRecord::Migration[5.2]
  def change
    create_table :properties do |t|
      t.string :address, null:false
      t.float :lat, null:false
      t.float :lng, null: false
      t.string :city, null:false
      t.string :state, null:false
      t.string :zipcode, null:false
      t.string :property_type, null:false
      t.integer :year_built, null:false
      t.integer :bedrooms, null:false
      t.float :list_price, null:false
      t.integer :bathrooms, null:false
      t.float :rent, null:false
      t.integer :sqft, null:false
      t.boolean :minimal_repairs, null:false
      t.boolean :open_house
      t.float :annualized_return, null:false
      t.integer :cap_rate, null:false
      t.float :gross_yield, null:false
      t.float :cash_flow, null:false
      t.float :appreciation, null:false
      t.float :neighborhood_rating, null:false
      t.float :average_school_rating, null:false
      t.integer :amt_of_horses, null: false
      t.string :type_of_occupancy, null: false
    end

    add_index :properties, :address, unique: true
    add_index :properties, :city
    add_index :properties, :state
    add_index :properties, :zipcode
    add_index :properties, :bedrooms
    add_index :properties, :rent
    add_index :properties, :sqft
    add_index :properties, :annualized_return
    add_index :properties, :cap_rate
    add_index :properties, :gross_yield
    add_index :properties, :bathrooms
    add_index :properties, :average_school_rating
    add_index :properties, :neighborhood_rating
    add_index :properties, :year_built
    add_index :properties, :type_of_occupancy
    add_index :properties, :amt_of_horses
  end
end
