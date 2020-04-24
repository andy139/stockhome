# == Schema Information
#
# Table name: shopping_carts
#
#  id          :bigint           not null, primary key
#  bid         :float
#  offered     :boolean
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

    validates_uniqueness_of :user_id, scope: :property_id
  

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :property,
    foreign_key: :property_id,
    class_name: :Property
    
    

end
