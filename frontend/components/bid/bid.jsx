import React from 'react';
import {useState} from 'react';




function Bid(props) {

    const [phase, setPhase] = useState(1);


    

    const buyBar = (
        <div className="buybar">

        </div>
    )

    const timeLineBar = (
        <div>

        </div>
    )



    return( 
        <div className="buy-container">
            {buyBar}




        </div>
    )





}