
export const fetchCart = () => (

    $.ajax({
        method: 'GET',
        url: `api/shopping_carts`,

    })


)



export const addItem = (propertyId, bid) => (

    $.ajax({
        method: 'POST',
        url: `api/shopping_carts`,
        data: { propertyId, bid}

    })



)


export const deleteItem = propertyId => (

    $.ajax({
        method: 'DELETE',
        url: `api/shopping_carts/${propertyId}`,

    })


)

export const updateBid = (propertyId, bid) => (

    $.ajax({
        method: 'PATCH',
        url: `api/shopping_carts/${propertyId}`,
        data: { propertyId, bid }

    })

)

export const fetchBid = (propertyId) => (
    $.ajax({

        method: 'GET',
        url: `api/shopping_carts/${propertyId}`,

    })



)





