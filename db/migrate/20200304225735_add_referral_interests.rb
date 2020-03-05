class AddReferralInterests < ActiveRecord::Migration[5.2]


  def change
    add_column :users, :interests, :string
  end
end
