json.set! @bid.property_id do
    json.extract! @bid, :id, :user_id, :bid
end

