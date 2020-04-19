class Api::PropertiesController < ApplicationController

    def index


        case params[:primary_filter]
        when "all"
            property = Property.limit(20)
            @amount_of_properties = Property.count
        when "minimal_repairs"
            property = Property.where(minimal_repairs: true)
             @amount_of_properties = property.count
        when "higher_yield"
            property = Property.where('gross_yield > ?', 11.0)
             @amount_of_properties = property.count
        when "1_rule" 
            property = Property.where('rent / list_price <= 1.0')
             @amount_of_properties = property.count
        when "best_schools"
            property = Property.where('average_school_rating > 4.5')
             @amount_of_properties = property.count
        when "best_neighborhood"
            property = Property.where('neighborhood_rating > 4.5')
             @amount_of_properties = property.count
        when "higher_appreciation"
            property = Property.where('appreciation > 3.0')
            @amount_of_properties = property.count
        else
            property = Property.limit(20)
            @amount_of_properties = Property.count
        end

        

      

        
        if (params[:price_range])
         
            price_range = params[:price_range]
            lower = price_range[0].to_i * 1000
            upper = price_range[1].to_i * 1000
            property = Property.where('list_price BETWEEN ? AND ?', lower, upper)
            @amount_of_properties = property.count
        end

        if (params[:rent_range])

            rent_range = params[:rent_range]
            lower = rent_range[0].to_i
            upper = rent_range[1].to_i
            property = Property.where('rent BETWEEN ? AND ?', lower, upper)
            @amount_of_properties = property.count

        end


        if (params[:locations])
           
            locations = params[:locations]

            if (locations.empty?)
                property = Property.all
            else
                property = Property.where(municipality: locations) 
            end
            @amount_of_properties = property.count

    
        
        end


        if (params[:page_filter])
            page = (params[:page_filter].to_i - 1) * 20
            property = property.limit(20).offset(page)
        
        else
            property = property.limit(20)
        
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
