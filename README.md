# StockHome 

[StockHome](https://stockhome-app.herokuapp.com/#/) is an online marketplace inspired by RoofStock that allows users to browse, purchase, and bid on properties. 

![Screenshot](https://s3.amazonaws.com/poly-screenshots.angel.co/Project/b8/1137052/c0cc2fc12f41ec633b4fc8578ca8afee-original.png)

## Technologies

* Ruby on Rails
* PostgreSQL
* React & Redux
* Google Maps API
* Amazon Storage (AWS S3) for image hosting
* ReactCSSTrasitions


## Features

### User Authorization
* Users can create and sign up on platform.
* Error handling and validations upon sign up.
* Users who are logged in can favorite properties and make offers on them.


 ![signup](/app/assets/images/signup.gif)

  ```javascript

  class SigninForm extends React.Component {
    
    constructor(props) {
        super(props);


        this.state = {
            email:'',
            password: '',
            confirm_password: '',
            lname: '',
            fname: '',
            phone_number: '',
            interests:'',
            referral: '',
            fname_error: '',
            lname_error: '',
            email_error: '',
            password_error: '',
            confirm_password: '',

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderSessionErrors = this.renderSessionErrors.bind(this);
        this.clearErrorsOnClick = this.clearErrorsOnClick.bind(this);
        this.setErrors = this.setErrors.bind(this)

    };


  }
    
  ```


### Dynamic Search
* Filtered property search which allows the user to query by price ranges, rent ranges, location, and other real estate property parameters.
* Property search also allows user to sort by price, rent, gross yield, and real estate parameters.
* Users will fetch properties from backend and have properties be stored on Redux Store.


![search](/app/assets/images/search.gif)


```ruby

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

    end

    
  ```



### Google Maps API
*  Google Maps that is populated with results from search query.
* Used Google Maps API fitBounds to adjust the size of the map for the user while browsing properties.

![maps](/app/assets/images/maps.gif)


```javascript

     renderMap() {

        let bounds = new google.maps.LatLngBounds();
        const mapOptions = {
            center: {
                lat: 59.3293,
                lng: 18.0686, 
            },
            zoom: 13.2,
        }

        let locations = this.props.properties
        this.map = new google.maps.Map(this.mapNode, mapOptions)

        if(locations.length > 0){
            let i = 0;
            for (i = 0; i < locations.length; i++) {

                let property = locations[i];
                let marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
                    map: this.map,
                    mapTypeId: google.maps.MapTypeId.TERRAIN,
                });
                bounds.extend(marker.position);
                marker.addListener('click', () => this.handleMarkerClick(property))

            }
            this.map.fitBounds(bounds);
        }
       
    }


```


### Add and delete properties to saves
 * Users will be able to add and delete properties from there saved roofs profile.
 * Leveraged useState, useEffect, and useRef from React Hooks library to store data on local React state and also to devise life cycle methods similar to componentDidMount, componentDidUpdate.
 

 ![save](/app/assets/images/saved.gif)

 ```javascript

 function Saved(props) {
    
    const [savedProperties, setProperties] = useState(props.saved);
    const mounted = useRef();

    useEffect(() => {
        setProperties(props.saved);
        if (!mounted.current) {
            props.fetchSaves();
            mounted.current = true;
        } else {
             
            setProperties(props.saved);
        }
    },[props.saved]);


 ```

### Submit offers and make changes to offers on properties
*  User can offer and change offers on platform, implemented via CRUD model.
*  User will be sent out to checkout page with a custom progression bar where they can change offer, view finals details of offer, and be sent to there recently submitted offers page.
* Offers will be validated on frontend using error handling logic and Regex, and also on backend using ActiveRecords validation method.


![offer](/app/assets/images/offer.gif)

```javascript

function isNumber(input = ''){


      if (input.match(".*[a-zA-Z]+.*")) {
        return false;
      }

      let num = parseFloat(input.replace(/,/g, ''));

      if (isNaN(num)) {
        return false;
      } else {
        return true;
      }
    }
```


### Modals
* Utilized global redux state to dispatch modal action if user is not logged in and trying to access saves, offers, and cart actions.


![modal](/app/assets/images/modal.gif)


```javascript

    export const createSave = (propertyId) => (dispatch, getState) => {

        if (Object.keys(getState().session).length  === 0) {
            dispatch(openModal("signupModal", null))
        } else {
            SaveAPIUtil.addSave(propertyId)
                .then(property => dispatch(addSave(property)))

        }

    };

```






