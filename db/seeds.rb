# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Property.delete_all
#Type of properties =

p1 = Property.create!(

    lat: 59.332263,
    lng: 18.064424,
    address: "Karlavägen 81
    Stockholm, Stockholm, 11459
    Sweden",
    city: "Stockholm",
    state: "Sweden",
    zipcode: 11459,
    property_type: "house",
    year_built: 1964,
    list_price: 1300000,
    bathrooms: 5,
    rent: 2000,
    sqft: 4000,
    bedrooms: 3,
    minimal_repairs: true,
    annualized_return: 6.6,
    cap_rate: 10,
    gross_yield: 12,
    cash_flow: 14,
    appreciation: 20,
    neighborhood_rating: 5,
    average_school_rating: 5,
    type_of_occupancy: "Empty",
    amt_of_horses: 0,
    open_house: true
)


p2 = Property.create!(

    lat: 59.402394,
    lng: 18.053589,
    address: "SIGURDVÄGEN 12
    Djursholm, Stockholm, 18254 Sweden",
    city: "Stockholm",
    state: "Sweden",
    zipcode: 18254,
    property_type: "house",
    year_built: 2005,
    list_price: 2000000,
    bathrooms: 10,
    rent: 3000,
    sqft: 5000,
    bedrooms: 5,
    minimal_repairs: true,
    annualized_return: 10.2,
    cap_rate: 10,
    gross_yield: 12,
    cash_flow: 14,
    appreciation: 20,
    neighborhood_rating: 5,
    average_school_rating: 5,
    type_of_occupancy: "Empty",
    amt_of_horses: 0,
    open_house: true
)



