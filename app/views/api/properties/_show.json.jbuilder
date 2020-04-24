json.extract! property, :id, :lat, :lng, :city, :address,
    :zipcode, :property_type, :year_built, :bedrooms,
    :list_price, :bathrooms, :rent, :sqft, :cash_only,
    :minimal_repairs, :annualized_return, :cap_rate,
    :gross_yield, :cash_flow, :appreciation, :neighborhood_rating,
    :average_school_rating, :amt_of_horses, :type_of_occupancy,
    :open_house, :total_return_5yrs, :municipality
if (property.photo.attached?)
    json.main_photo_url url_for(property.photo)
end

if(current_user)

    if (property.carts.empty?)
        json.offered false
        json.bid nil
    else
        json.offered property.carts.where(user_id: current_user.id).last.offered 
        json.bid property.carts.where(user_id: current_user.id).last.bid 
    end


end


json.photo_urls property.photos.map { |file| url_for(file) }