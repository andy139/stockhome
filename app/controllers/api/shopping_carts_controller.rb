class Api::ShoppingCartsController < ApplicationController
     def index

    
        @shopping_cart = current_user.cart_properties
        render :index

    end

    def create

        if !current_user 
            render json: ["User not logged in"]
        else

            property_id = params[:propertyId].to_i
            bid_amount = params[:bid_amount].to_i

            if !bid_amount
                bid_amount = nil
            end

            @cart_property = ShoppingCart.new(user_id: current_user.id, property_id: property_id, bid: bid_amount)
            if @cart_property.save

                @property = @cart_property.property
                @bid_amount = @cart_property
                render :show
            else
                render json: ["Could not save that property into cart"], status:422
            end

        end

       
    end

    def destroy
        property_id = params[:id].to_i
        @uncart_property = ShoppingCart.find_by(user_id: current_user.id, property_id: property_id)

        if @uncart_property
            @uncart_property.destroy
            render :destroy
        else
            render json:["That property does not exist in your saves"], status:422
        end
    end

    
end
