import React from 'react';
import PropertyIndexItem from './property_index_item'


class PropertyIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
         
        this.props.fetchProperties();
    }

    render(){
        if (!this.props.properties) return null;

        const properties = this.props.properties.map( property => (
            <PropertyIndexItem key={property.id} property={property}/>
        ))

        return(
            <div className="property-marketplace-container">
                <div className= "property-index-container">
                    {properties}
                </div>

            </div>
        )
    }

}



export default PropertyIndex;