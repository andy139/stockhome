import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../carousel/carousel';
import Submenu from '../submenu/submenu'
import ShowMisc from './show_misc';
import Tabs from './tabs'
import ShowMap from '../map/show_map'
import SearchFooter from '../search/search_footer'
import Footer from '../footer/footer'


class PropertyShow extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            bid :'',
        }

    }

    componentDidMount(){

         
         
        this.props.fetchProperty(this.props.propertyId);
        this.props.fetchSaves();
        window.scrollTo(0,0)

    }

    componentWillReceiveProps(nextProps) {
         
        if (nextProps.location !== this.props.location) {
             
            this.props.fetchProperty(this.props.propertyId)
            window.scrollTo(0, 0)
        }
    }


    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });

        
    }

    addDecimals (num) {
        return (Math.round(num*100)/100).toFixed(2)

    }



    addCommas(nStr){
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
         x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
       }


   

    render(){

        const loadingScreen = (

            
            <div className="loading-screen">

                <img src="https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/Spinner-1s-200px+(4).gif"></img>

            </div>

        )
             

    
        if (!this.props.property) return null;
        if(!this.props.property.photo_urls) return null;


        
        const { rent, cap_rate, municipality, city, gross_yield, appreciation, cash_flow,
            annualized_return, sqft, year_built, zipcode, lat, lng,
            neighborhood_rating, address, list_price, average_school_rating,
            bedrooms, bathrooms, open_house, total_return_5yrs, main_photo_url, photo_urls} = this.props.property
            debugger
        const panes = [
            {title: 'Summary', content: <ShowMap lat={lat} lng={lng}></ShowMap> },
            { title: 'Similar Listings', content: <div>'SIMILAR LISTINGS HERE'</div>},
        
        ];
                 


        const price = this.addCommas(list_price)
        const allImages = photo_urls.map( url => {
            

            return  (
                    <img src={url} className="show-image-url" />
                )
        })

        const showPage = (
            <div className="showpage-container">

                <div className="main-show-container">
                    <div className="carousel-container">
                        <div className="carousel-words-space">
                            <div id="subbox-ontop-of-carousel">
                                <div className="topbox">{address}</div>
                                <div className="topbox">{city}, {municipality} {zipcode} </div>
                            </div>
                            
                            <div className="exclusive-1">
                                <span className="swedish-flag">
                                    <img  src="https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/icons8-sweden-48.png"></img>
                                </span>
                                <div className="exclusive-words">
                                    <div className="stockhome-word">
                                        &nbsp; Stockhome
                                    </div>
                                    <div>
                                        Exclusive
                                    </div>
                                </div>
                        
                            </div>


                        
                        </div>

                        <Carousel className="carousel" key={this.props.property.id} bedrooms={bedrooms} bathrooms={bathrooms}
                            sqft={this.addCommas(sqft)} year_built={year_built}>

                            {allImages}

                        </Carousel>
                    </div>

                    <ShowMisc key={this.props.property.id} props={this.props.property} />

                </div>

                <div className="tabs-fullwidth">
                    <Tabs key={this.props.property.id} panes={panes} county={municipality} neighborhood_rating={neighborhood_rating} fetchProperty={this.props.fetchProperty} average_school_rating={average_school_rating} />
                </div>
            </div>
            
        )

         

        return(
            <div className="show-page-container2">
         

                {this.props.loading.detailLoading ? loadingScreen : showPage}
                
                

        
                
            </div>
         
        )

    }


}

export default PropertyShow;