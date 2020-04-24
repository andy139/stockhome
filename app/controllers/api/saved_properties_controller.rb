class Api::SavedPropertiesController < ApplicationController

    def index

        if !current_user 
            render :nothing => true, :status => 204
        else
            @saved_properties = current_user.saved_properties
            render :index
        end


    end

    def create

       


        if !current_user 
            render json: ["User not logged in"]
        else

            property_id = params[:propertyId].to_i
            @saved_property = SavedProperty.new(user_id: current_user.id, property_id: property_id)
            if @saved_property.save

                @property = @saved_property.property
                render :show
            else
                render json: ["Could not save that property into saves"], status:422
            end

        end

       
    end

    def destroy
        property_id = params[:id].to_i
        @unsave_property = SavedProperty.find_by(user_id: current_user.id, property_id: property_id)

        if @unsave_property
            @unsave_property.destroy
            render :destroy
        else
            render json:["That property does not exist in your saves"], status:422
        end
    end



 


end
