json.set! @property.id do
    json.partial! 'cart_property', cart_property: @property
end
