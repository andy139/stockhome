# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

# Examples:

#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# https://gyazo.com/7b4e94adadf44ac140e359c9426e429d list of counties
require 'open-uri'
require 'random-location'

User.delete_all
Property.delete_all



u1 = User.create(
    email: "JohnDoe@gmail.com",
    password: "password",
    fname: "John",
    lname: "Doe",

)

p2c = RandomLocation.near_by(59.334591, 18.063240, 5000)

p2 = Property.create(

    lat: p2c[0],
    lng: p2c[1],
    address: "Karlavägen 81",
    city: "Stockholm",
    municipality: "Stockholm",
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

p3c = RandomLocation.near_by(59.334591, 18.063240, 5000.2)

p3 = Property.create(

    lat: p3c[0],
    lng: p3c[1],
    address: "Linnégatan 67",
    city: "Stockholm",
    municipality: "Stockholm",
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

p4c = RandomLocation.near_by(59.334591, 18.063240, 5000.2)

p4 = Property.create(

    lat: p4c[0],
    lng: p4c[1],
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

p5c = RandomLocation.near_by(59.334591, 18.063240, 5000.2)


p5 = Property.create(

    lat: p5c[0],
    lng: p5c[1],
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


p6c = RandomLocation.near_by(59.334591, 18.063240, 5000.2)

p6 = Property.create(

    lat: p6c[0],
    lng: p6c[1],
    address: "Wittensdalsvägen 26",
    city: "Stockholm",
    municipality: "Stockholm",
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

p7c = RandomLocation.near_by(59.334591, 18.063240, 5000.2)

p7 = Property.create(

    lat: p7c[0],
    lng: p7c[1],
    address: "Valhallavägen 117",
    city: "Stockholm",
    municipality: "Stockholm",
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


allCounties = [
  "Botkyrka",
  "Danderyd",
  "Ekerö",
  "Haninge",
  "Huddinge",
  "Järfälla",
  "Lidingö",
  "Nacka",
  "Norrtälje",
  "Nykvarn",
  "Nynäshamn",
  "Salem",
  "Sigtuna",
  "Sollentuna",
  "Solna",
  "Stockholm",
  "Sundbyberg",
  "Södertälje",
  "Tyresö",
  "Täby",
  "Upplands-Bro",
  "Upplands",
  "Väsby",
  "Vallentuna",
  "Vaxholm",
  "Värmdö",
  "Österåker",
]


allCounties2 = [
  
    "Danderyd",
    "Lidingö",
    "Stockholm",
    "Sundbyberg",
    "Solna",
    "Huddinge"
  
]



randomstreets = [

"Assessorsgatan",   
"Atlasgatan",   
"Atterbomsvägen",     
"Atterbomsvägen",   
"Babordsgatan",  
"Biblioteksgatan",
"Hantverkargatan",     
"Härdgången",     
"Hårdvallsgatan",    
"Hårdvallsgatan",    
"Harry Martinsons Gata",  
"Hästholmsvägen",   
"Havregatan"  
]


allCounties2 = [
  
    "Danderyd",
    "Lidingö",
    "Stockholm",
    "Sundbyberg",
    "Solna",
    "Huddinge"
  
]


#DANDERYD SEEDS

(1..6).each do |n|

    near_dand = RandomLocation.near_by(59.4059, 18.0258, 5000.2)
    random_address = randomstreets[n*2]
    random_zipcode = rand 11531...11931
    year_built = rand 1960...2020
    list_price = (rand 1000000...5000000)/1000 * 1000
    bathrooms = rand 3...15
    rent = rand 3000...30000
    sqft = rand 3000...10000
    bedrooms = rand 3...20
    minimal_repairs =  [true, false][rand(2)]
    annualized_return = rand(0...6.0).round(2)
    cap_rate = rand(2.9...15.1).round(2)
    gross_yield = rand(6.0...21.0).round(2)
    cash_flow = rand(6.0...16.1).round(2)
    appreciation = rand(6.0...22.0).round(2)

    ratings =  [2.5,3,3.5,4.0,4.5,5.0]
  
    avg_school = [2.5,3,3.5,4.0,4.5,5.0][rand(0..5)]
    neighborhood_rating = [2.5,3,3.5,4.0,4.5,5.0][rand(0..5)]
    open_house = [true, false][rand(2)]
    total_return_5yrs = rand 30000..200000
    # cash_only = [true, false][rand(2)]

    danderyd = Property.create(
            lat: near_dand[0],
            lng: near_dand[1],
            address: random_address,
            city: "Stockholm",
            municipality: "Danderyd",
            zipcode: random_zipcode,
            property_type: "house",
            year_built: year_built,
            list_price: list_price,
            bathrooms: bathrooms,
            rent: rent,
            sqft: sqft,
            bedrooms: bedrooms,
            minimal_repairs: minimal_repairs,
            annualized_return: annualized_return,
            cap_rate: cap_rate,
            gross_yield: gross_yield,
            cash_flow: cash_flow,
            appreciation: appreciation,
            neighborhood_rating: neighborhood_rating,
            average_school_rating: avg_school,
            type_of_occupancy: "Empty",
            amt_of_horses: 0,
            open_house: open_house,
            total_return_5yrs: total_return_5yrs

)




end







