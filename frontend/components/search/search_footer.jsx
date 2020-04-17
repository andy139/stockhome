import React from 'react';



const allCounties = [
  "Botkyrka",
  "Danderyd",
  "Ekerö",
  "Haninge",
  "Huddinge",
  "Järfälla",
  "Lidingö",
  "Nacka",
  "Norrtälje",
  "Nykvarn",
  "Nynäshamn",
  "Salem",
  "Sigtuna",
  "Sollentuna",
  "Solna",
  "Stockholm",
  "Sundbyberg",
  "Södertälje",
  "Tyresö",
  "Täby",
  "Upplands-Bro",
  "Upplands",
  "Väsby",
  "Vallentuna",
  "Vaxholm",
  "Värmdö",
  "Österåker",
];


class SearchFooter extends React.Component {
    

    constructor(props){
        super(props)
    }

    render(){


        return(
        
            <div className="show-footer-1-full-length">
                <div className="footer-1">

               
                    <div className="stockhome-markets">Stockhome Markets</div>
                    <p className="lineheight">
                        Botkyrka | Danderyd | Ekerö | Haninge | Huddinge | Järfälla | Lidingö |
                        Nacka | Norrtälje | Nykvarn | Nynäshamn | Salem | Sigtuna | Sollentuna | Solna | Stockholm | Sundbyberg |
                        Södertälje | Tyresö | Täby | Upplands-Bro | Upplands | Väsby | Vallentuna | Vaxholm | Värmdö | Österåker	

                     </p>
                    <div></div>

                </div>

            </div>
        
        
        
        )
    }


}

export default SearchFooter;