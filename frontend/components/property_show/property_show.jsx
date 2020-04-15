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
         
        this.props.fetchProperty(this.props.propertyId)
        window.scrollTo(0,0)

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

        const { rent, cap_rate, municipility, city, gross_yield, appreciation, cash_flow,
            annualized_return, sqft, year_built, zipcode, lat, lng,
            neighborhood_rating, address, list_price, average_school_rating,
            bedrooms, bathrooms, open_house, total_return_5yrs, main_photo_url, photo_urls} = this.props.property

        const panes = [
            {title: 'Summary', content: <ShowMap lat={lat} lng={lng}></ShowMap> },
            {title: 'Similar Listings', content: 'SIMILAR LISTINGS HERE'},
        
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
                                <div className="topbox">{city}, {municipility} {zipcode} </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        Stockhome
                                        </div>
                                    <div>
                                        <FontAwesomeIcon icon={faKey} className="key-resizing" /> Exclusive
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
                    <Tabs key={this.props.property.id} panes={panes} neighborhood_rating={neighborhood_rating} average_school_rating={average_school_rating} />
                </div>
            </div>
            
        )

         

        return(
            <div>
                <div className ="submenu-full-length">
                
                    <div className="border-bottom"><Submenu key={this.props.property.id}></Submenu></div>
                </div>

                {this.props.loading.detailLoading ? loadingScreen : showPage}
                
                

                <SearchFooter/>
                <Footer/>
            </div>
         
        )

    }


}

export default PropertyShow;