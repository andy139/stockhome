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
require 'test_helper'

class ShoppingCartTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
