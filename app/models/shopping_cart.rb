# == Schema Information
#
# Table name: shopping_carts
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  property_id :integer          not null
#  user_id     :integer          not null
#
# Indexes
#
#  index_shopping_carts_on_property_id  (property_id)
#  index_shopping_carts_on_user_id      (user_id)
#
class ShoppingCart < ApplicationRecord

    validates :user_id, uniqueness: true

    belongs_to :user
    has_many :properties
    

end
