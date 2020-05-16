


@properties.each do |property|
    json.set! property.id do
        json.partial! 'property', property: property
    end
end



json.amount_of_properties @amount_of_properties