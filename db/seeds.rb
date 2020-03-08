# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Property.delete_all

#Type of properties =

u1 = User.create(
    email: "JohnDoe@gmail.com",
    password: "password",
    fname: "John",
    lname: "Doe",

)

p1 = Property.create(

    lat: 59.332263,
    lng: 18.064424,
    address: "Karlavägen 81, Stockholm, Stockholm, 11459
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
    open_house: false,
    total_return_5yrs: 15000
)


p2 = Property.create(

    lat: 59.402394,
    lng: 18.053589,
    address: "SIGURDVÄGEN 12, Djursholm, Stockholm, 18254 Sweden",
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
    open_house: true,
    total_return_5yrs: 18000
)

p3 = Property.create(

    lat: 59.340488,
    lng: 18.084369,
    address: "ELFVIK LIDINGÖ Lidingo, Stockholm, 181 90 Sweden",
    city: "Stockholm",
    state: "Sweden",
    zipcode: 18190,
    property_type: "house",
    year_built: 2005,
    list_price: 2432324,
    bathrooms: 11,
    rent: 3000,
    sqft: 5000,
    bedrooms: 5,
    minimal_repairs: false,
    annualized_return: 10.2,
    cap_rate: 10,
    gross_yield: 12,
    cash_flow: 14,
    appreciation: 10,
    neighborhood_rating: 3,
    average_school_rating: 4,
    type_of_occupancy: "Empty",
    amt_of_horses: 0,
    open_house: false,
    total_return_5yrs: 24123
)


p4 = Property.create(

    lat: 59.342336,
    lng: 18.081142,
    address: "BUSKUDDSVÄGEN 28, Vaxholm, Stockholm, 185 95 Sweden",
    city: "Stockholm",
    state: "Sweden",
    zipcode: 11438,
    property_type: "house",
    year_built: 1996,
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
    open_house: true,
    total_return_5yrs: 42320
)

p5 = Property.create(

    lat: 59.402394,
    lng: 18.053589,
    address: "Grev Turegatan 82, 114 38 Stockholm, Sweden",
    city: "Stockholm",
    state: "Sweden",
    zipcode: 18254,
    property_type: "house",
    year_built: 2005,
    list_price: 2000000,
    bathrooms: 10,
    rent: 3000,
    sqft: 1000,
    bedrooms: 3,
    minimal_repairs: true,
    annualized_return: 10.2,
    cap_rate: 10,
    gross_yield: 12,
    cash_flow: 14,
    appreciation: 20,
    neighborhood_rating: 4,
    average_school_rating: 3,
    type_of_occupancy: "Empty",
    amt_of_horses: 0,
    open_house: false,
    total_return_5yrs: 30000
)

p6 = Property.create(

    lat: 59.342768,
    lng: 18.083297,
    address: "Valhallavägen 117, 115 31 Stockholm, Sweden",
    city: "Stockholm",
    state: "Sweden",
    zipcode: 11531,
    property_type: "house",
    year_built: 1993,
    list_price: 1000000,
    bathrooms: 7,
    rent: 4000,
    sqft: 500,
    bedrooms: 3,
    minimal_repairs: false,
    annualized_return: 10.2,
    cap_rate: 3,
    gross_yield: 8,
    cash_flow: 14,
    appreciation: 20,
    neighborhood_rating: 4,
    average_school_rating: 3,
    type_of_occupancy: "Empty",
    amt_of_horses: 0,
    open_house: true,
    total_return_5yrs: 12000
)





