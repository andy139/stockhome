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
class SavedProperty < ApplicationRecord
    validates :user_id, :property_id, presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :property,
    foreign_key: :property_id,
    class_name: :Property
    
    
end
