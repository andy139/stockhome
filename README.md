# StockHome

[StockHome](https://stockhome-app.herokuapp.com/#/) is an online marketplace inspired by RoofStock that allows users to browse, purchase, and bid on properties.

## Technologies

* Ruby on Rails
* PostgreSQL
* React & Redux
* Google Maps API
* Amazon Storage (AWS S3) for image hosting
* ReactCSSTrasitions


## Features

### User Authorization
* Users can create and sign up on platform
* Error handling and validations upon sign up
* Users who are logged in can favorite properties and make offers on them.

 ![signup](/app/assets/images/signup.gif)


### Dynamic Search
* Filtered property search which allows the user to query by price ranges, rent ranges, location, and other real estate property parameters.
* Property search also allows user to sort by price, rent, gross yield, and real estate parameters.
* Users will fetch properties from backend and have properties be stored on Redux Store

![search](/app/assets/images/search.gif)

### Google Maps API
*  Google Maps that is populated with results from search query.

![maps](/app/assets/images/maps.gif)

### Add Properties to Saves
 * Users will be able to add and delete properties from there saved roofs profile.

### Submit Offers on Properties
*  User can offer and change offers on platform, implemented via CRUD model.
*  User will be sent out to checkout page where they can change offer, view finals details of offer, and be sent to there recently submitted offers page.

### Modals
* Signup and login modal is dispatched when user tries to favorite or make an offer on property.












