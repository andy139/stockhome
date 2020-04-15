class Api::SavedPropertiesController < ApplicationController

    def index
        saved_properties = current_user.saved_properties
    end

    def create
        saved_property = SavedProperty.new(saved_property_params)

        if saved_property.save
            render :show
        else
            render json: ["Could not save that property into saves"], status:422
        end
    end

    def destroy
        saved_property = SavedProperty.find(params[:id])
        saved_property.destroy
        render :show
    end

    private

    def saved_property_params
        params.require(:saved_property).permit(:property_id, :user_id)
    end


end
