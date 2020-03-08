# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_08_074048) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "properties", force: :cascade do |t|
    t.string "address", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "zipcode", null: false
    t.string "property_type", null: false
    t.integer "year_built", null: false
    t.integer "bedrooms", null: false
    t.float "list_price", null: false
    t.integer "bathrooms", null: false
    t.float "rent", null: false
    t.integer "sqft", null: false
    t.boolean "minimal_repairs", null: false
    t.boolean "open_house"
    t.float "annualized_return", null: false
    t.integer "cap_rate", null: false
    t.float "gross_yield", null: false
    t.float "cash_flow", null: false
    t.float "appreciation", null: false
    t.float "neighborhood_rating", null: false
    t.float "average_school_rating", null: false
    t.integer "amt_of_horses", null: false
    t.string "type_of_occupancy", null: false
    t.float "total_return_5yrs"
    t.index ["address"], name: "index_properties_on_address", unique: true
    t.index ["amt_of_horses"], name: "index_properties_on_amt_of_horses"
    t.index ["annualized_return"], name: "index_properties_on_annualized_return"
    t.index ["average_school_rating"], name: "index_properties_on_average_school_rating"
    t.index ["bathrooms"], name: "index_properties_on_bathrooms"
    t.index ["bedrooms"], name: "index_properties_on_bedrooms"
    t.index ["cap_rate"], name: "index_properties_on_cap_rate"
    t.index ["city"], name: "index_properties_on_city"
    t.index ["gross_yield"], name: "index_properties_on_gross_yield"
    t.index ["neighborhood_rating"], name: "index_properties_on_neighborhood_rating"
    t.index ["rent"], name: "index_properties_on_rent"
    t.index ["sqft"], name: "index_properties_on_sqft"
    t.index ["state"], name: "index_properties_on_state"
    t.index ["type_of_occupancy"], name: "index_properties_on_type_of_occupancy"
    t.index ["year_built"], name: "index_properties_on_year_built"
    t.index ["zipcode"], name: "index_properties_on_zipcode"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "fname", null: false
    t.string "lname", null: false
    t.integer "zipcode"
    t.string "account_type"
    t.integer "phone_number"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "interests"
    t.string "referral"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
