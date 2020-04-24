@shopping_cart.each do |cart_property|

     json.set! cart_property.id do
        json.partial! 'cart_property', cart_property: cart_property
    end
end