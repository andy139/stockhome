# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# https://gyazo.com/7b4e94adadf44ac140e359c9426e429d list of counties
require 'open-uri'

User.delete_all
Property.delete_all



u1 = User.create(
    email: "JohnDoe@gmail.com",
    password: "password",
    fname: "John",
    lname: "Doe",

)



p2 = Property.create(

    lat: 59.332263,
    lng: 18.064424,
    address: "Karlavägen 81",
    city: "Stockholm",
    municipality: "Danderyd",
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
    neighborhood_rating: 3.5,
    average_school_rating: 5,
    type_of_occupancy: "Empty",
    amt_of_horses: 0,
    open_house: false,
    total_return_5yrs: 15000
)

f1 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_2.jpg')
p2.photos.attach(io: f1, filename: 'house_2.jpg')


f2 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_2_2.jpg')
f3 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_2_3.jpg')
f4 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_2_4.jpg')
f5 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_2_5.jpg')
f6 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_2_6.jpg')
f7 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_2_7.jpg')

[f2,f3,f4,f5,f6,f7].each_with_index do |attachment,i|
    p2.photos.attach(io: attachment, filename: "house_2_#{i}.png")
end



p3 = Property.create(

    lat: 59.402394,
    lng: 18.053589,
    address: "Linnégatan 67",
    city: "Stockholm",
    municipality: "Danderyd",
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
    neighborhood_rating: 4,
    average_school_rating: 3,
    type_of_occupancy: "Empty",
    amt_of_horses: 0,
    open_house: true,
    total_return_5yrs: 18000
)


f1 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_3_0.jpg')
p3.photos.attach(io: f1, filename: 'house_3_0.jpg')


f2 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_3_1.jpg')
f3 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_3_2.jpg')
f4 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_3_3.jpg')
f5 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_3_4.jpg')
f6 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_3_5.jpg')

[f2,f3,f4,f5,f6].each_with_index do |attachment,i|
    p3.photos.attach(io: attachment, filename: "house_3_#{i}.png")
end

p4 = Property.create(

    lat: 59.329382,
    lng: 18.068548,
    address: "Karlsuddsvagen 63A",
    city: "Stockholm",
    municipality: "Stockholm",
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
    neighborhood_rating: 3.5,
    average_school_rating: 4,
    type_of_occupancy: "Empty",
    amt_of_horses: 0,
    open_house: false,
    total_return_5yrs: 24123
)


f1 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_4_0.jpg')
p4.photos.attach(io: f1, filename: 'house_4_0.jpg')


f2 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_4_1.jpg')
f3 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_4_2.jpg')
f4 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_4_3.jpg')
f5 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_4_4.jpg')
f6 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_4_5.jpg')

[f2,f3,f4,f5,f6].each_with_index do |attachment,i|
    p4.photos.attach(io: attachment, filename: "house_4_#{i}.jpg")
end



p5 = Property.create(

    lat: 59.330074,
    lng: 18.068162,
    address: "Järpstigen 9",
    city: "Stockholm",
    municipality: "Stockholm",
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
    neighborhood_rating: 4,
    average_school_rating: 5,
    type_of_occupancy: "Empty",
    amt_of_horses: 0,
    open_house: true,
    total_return_5yrs: 42320
)


f1 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_5_1.png')
p5.photos.attach(io: f1, filename: 'house_5_1.png')


f2 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_5_0.jpg')
f3 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_5_2.jpg')
f4 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_5_3.jpg')
f5 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_5_4.jpg')
f6 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_5_5.jpg')

[f2,f3,f4,f5,f6].each_with_index do |attachment,i|
    p5.photos.attach(io: attachment, filename: "house_5_#{i}.jpg")
end

p6 = Property.create(

    lat: 59.333074,
    lng: 18.168162,
    address: "Wittensdalsvägen 26",
    city: "Stockholm",
    municipality: "Ekerö",
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


f1 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_6_0.jpg')
p6.photos.attach(io: f1, filename: 'house_6_0.jpg')
f2 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_6_1.png')
p6.photos.attach(io: f2, filename: 'house_6_8.png')

f3 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_6_2.jpg')
f4 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_6_3.jpg')
f5 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_6_4.jpg')
f6 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_6_5.jpg')

[f3,f4,f5,f6].each_with_index do |attachment,i|
    p5.photos.attach(io: attachment, filename: "house_6_#{i}.jpg")
end

p7 = Property.create(

    lat: 59.323074,
    lng: 18.198162,
    address: "Valhallavägen 117",
    city: "Stockholm",
    municipality: "Sundbyberg",
    zipcode: 11531,
    property_type: "house",
    year_built: 1993,
    list_price: 1000000,
    bathrooms: 7,
    rent: 4000,
    sqft: 1600,
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




f1 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_7_0.jpg')
p7.photos.attach(io: f1, filename: 'house_7_0.jpg')


f2 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_7_1.jpg')
f3 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_7_2.jpg')
f4 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_7_3.jpg')
f5 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_7_4.jpg')
f6 = open('https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/house_7_5.jpg')


[f2,f3,f4,f5,f6].each_with_index do |attachment,i|
    p7.photos.attach(io: attachment, filename: "house_7_#{i}.jpg")
end


