# == Schema Information
#
# Table name: properties
#
#  id                    :bigint           not null, primary key
#  address               :string           not null
#  amt_of_horses         :integer          not null
#  annualized_return     :float            not null
#  appreciation          :float            not null
#  average_school_rating :float            not null
#  bathrooms             :integer          not null
#  bedrooms              :integer          not null
#  cap_rate              :float            not null
#  cash_flow             :float            not null
#  cash_only             :boolean
#  city                  :string           not null
#  gross_yield           :float            not null
#  lat                   :float            not null
#  list_price            :float            not null
#  lng                   :float            not null
#  minimal_repairs       :boolean          not null
#  municipality          :string
#  neighborhood_rating   :float            not null
#  open_house            :boolean
#  property_type         :string           not null
#  rent                  :float            not null
#  sqft                  :integer          not null
#  total_return_5yrs     :float
#  type_of_occupancy     :string           not null
#  year_built            :integer          not null
#  zipcode               :string           not null
#
# Indexes
#
#  index_properties_on_address                (address) UNIQUE
#  index_properties_on_amt_of_horses          (amt_of_horses)
#  index_properties_on_annualized_return      (annualized_return)
#  index_properties_on_average_school_rating  (average_school_rating)
#  index_properties_on_bathrooms              (bathrooms)
#  index_properties_on_bedrooms               (bedrooms)
#  index_properties_on_cap_rate               (cap_rate)
#  index_properties_on_city                   (city)
#  index_properties_on_gross_yield            (gross_yield)
#  index_properties_on_municipality           (municipality)
#  index_properties_on_neighborhood_rating    (neighborhood_rating)
#  index_properties_on_rent                   (rent)
#  index_properties_on_sqft                   (sqft)
#  index_properties_on_type_of_occupancy      (type_of_occupancy)
#  index_properties_on_year_built             (year_built)
#  index_properties_on_zipcode                (zipcode)
#
class Property < ApplicationRecord
    validates :address, presence: true

    has_one_attached :photo
    has_many_attached :photos

    
    
    has_many :saved_properties,
    primary_key: :id,
    foreign_key: :property_id,
    class_name: :SavedProperty

    has_many :carts,
    primary_key: :id,
    foreign_key: :property_id,
    class_name: :ShoppingCart
    


    has_one :user,
    through: :saved_properties,
    source: :user



end
