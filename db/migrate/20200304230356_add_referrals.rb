class AddReferrals < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :referral, :string
  end
end
