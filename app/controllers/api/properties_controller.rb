class Api::PropertiesController < ApplicationController

    def index

        case params[:primary_filter]
        when "all"
            property = Property.all
        when "minimal_repairs"
            property = Property.where(minimal_repairs: true)
        when "higher_yield"
            property = Property.where('gross_yield > ?', 11.0)
        when "1_rule" 
            property = Property.where('rent / list_price <= 1.0')
        when "best_schools"
            property = Property.where('average_school_rating > 4.5')
        when "best_neighborhood"
            property = Property.where('neighborhood_rating > 4.5')
        when "higher_appreciation"
            property = Property.where('appreciation > 3.0')
        else
            property = Property.all
        end


        
        if (params[:price_range])

            price_range = params[:price_range]
            lower = price_range[0].to_i * 1000
            upper = price_range[1].to_i * 1000
            property = property.where('list_price BETWEEN ? AND ?', lower, upper)
            # debugger

        end

        if (params[:rent_range])
            rent_range = params[:rent_range]
            lower = rent_range[0].to_i
            upper = rent_range[1].to_i
            property = property.where('rent BETWEEN ? AND ?', lower, upper)

            
        
        end


        if (params[:locations])
            locations = params[:locations]
            if (locations.empty?)
                property = property.all
            else
                property = property.where(municipality: locations) 
            end

            
        
        end
        
        



        @properties = property
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
            photos: []
        )

    end


end
