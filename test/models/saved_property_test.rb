# == Schema Information
#
# Table name: saved_properties
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  property_id :integer          not null
#  user_id     :integer          not null
#
# Indexes
#
#  index_saved_properties_on_property_id  (property_id)
#  index_saved_properties_on_user_id      (user_id)
#
require 'test_helper'

class SavedPropertyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
