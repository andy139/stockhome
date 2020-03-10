import React from 'react';
import FeaturedItem from './featured_item';


class FeaturedIndex extends React.Component {
    constructor(props){
        super(props);
    }



    componentDidMount(){
        this.props.fetchProperties();

    }

    
    getRandom(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }

    render(){
        if (!this.props.properties) return null;

        const properties = this.props.properties.map( property => (
            <FeaturedItem key={property.id} property={property}/>
        ))








        return(

            <div className="featured_index">
                {[properties[0], properties[1], properties[2]]}
            </div>



        )


    }
    

}

export default FeaturedIndex