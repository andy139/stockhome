import { connect } from 'react-redux';
import React from 'react';
import { updateSortFilter, updateFilter } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';
import {useState, useCallback} from 'react';



const mapStateToProps = state => ({
    properties: asArray(state.entities),
    filters: state.entities.filters,
    propertyAmount: state.entities.properties.amount_of_properties

})


const mapDispatchToProps = dispatch => ({

    amountFilter: (value) => dispatch(updateFilter("page_filter", value)),
    primaryFilter: (value) => dispatch(updateFilter("primary_filter", value)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    updateSortFilter: (filter, value) => dispatch(updateSortFilter(filter, value)),


});


 


function SearchPage(props) {

    let i = 0;
    let pageNumArr = []
    let numPages = Math.ceil(props.propertyAmount / 20)

    for(i = 0; i < numPages; i++){
         
        pageNumArr = pageNumArr.concat(i + 1)
    }


    // let pageNumArr = [1,2,3,4,5,6,7,8,9]

    const [currPage, setPage] = useState(1)


     

    const handleBack = useCallback(
        () => {
            if (currPage === 1){
                setPage(1)
            } else {
                setPage(currPage+1)
                props.amountFilter(currPage+1)
            }
       

        },
        [], // Tells React to memoize regardless of arguments.
    );

    const handleFront = useCallback(
        () => {
    
            if (currPage === pageNumArr[-1]) {
                setPage(currPage)
            } else {
                props.amountFilter(currPage + 1 )
                setPage(currPage + 1)
            }
           

        },
        [], // Tells React to memoize regardless of arguments.
    );

  

    




    return(
        <div className="page-misc">

            <span className="page-nums"
                onClick={() => handleBack()
                }
            
            
            ><i class="fas fa-angle-left"></i></span>
                {
                    pageNumArr.map((page) => {

                        return  currPage === page ? <span onClick={() => {
                            props.amountFilter(page)
                            setPage(page)
                        
                        }} className="page-nums-bolded">{page}</span> :<span onClick={() => {
                            props.amountFilter(page)
                            setPage(page)
                        
                        }} className="page-nums">{page}</span>
                    })
                }
    
            <span className="page-nums" onClick={() => 
                
                handleFront()
            
            }
                
                ><i class="fas fa-angle-right"></i></span>
            
        </div>

    )




}






export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchPage);