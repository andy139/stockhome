json.set! @cart_item.property_id do
    json.extract! @cart_item, :id, :user_id, :bid, :offered
end
