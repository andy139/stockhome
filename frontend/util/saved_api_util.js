
export const fetchSaves = () => (

    $.ajax({
        method: 'GET',
        url: `api/saved_properties`,
  
    })


)



export const addSave = propertyId => (

    $.ajax({
        method: 'POST',
        url: `api/saved_properties`,
        data: {propertyId}

    })



)


export const removeSave = propertyId => (

    $.ajax({
        method: 'DELETE',
        url: `api/saved_properties/${propertyId}`,

    })


)

