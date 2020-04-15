@saved_properties.each do |saved_property|

     json.set! saved_property.id do
        json.partial! 'saved_property', saved_property: saved_property
    end
end