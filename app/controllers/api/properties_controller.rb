class Api::PropertiesController < ApplicationController

    def index
        @properties = Property.all
        render :index

    end

    def create
        @property = Property.create(property_params)
        render :show
    end

    def show
        @property = Property.find(params[:id])
        render :show
    end

    private


    def property_params
        params.require(:property).permit(
            :lat,
            :lng,
            :city,
            :state,
            :zipcode,
            :property_type,
            :year_built,
            :bedrooms,
            :bathrooms,
        )

    end


end
