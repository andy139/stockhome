export const sort = (propertiesArr, type) => {

    let sortedProperties;

    if (type === "Default") {
        return sortedProperties = propertiesArr
            .sort((a, b) => parseFloat(a.id) > parseFloat(b.id) ? 1 : -1)
    }


    if (type === "Price") {
        return sortedProperties = propertiesArr
            .sort((a, b) => parseFloat(b.list_price) > parseFloat(a.list_price) ? 1 : -1)
    }

    if (type === "Rent") {
        return sortedProperties = propertiesArr
            .sort((a, b) => parseFloat(b.rent) > parseFloat(a.rent) ? 1 : -1)
    }

    if (type === "Gross Yield") {
        return sortedProperties = propertiesArr
            .sort((a, b) => parseFloat(b.gross_yield) > parseFloat(a.gross_yield) ? 1 : -1)
    }


    if (type === "Cap Rate") {
        return sortedProperties = propertiesArr
            .sort((a, b) => parseFloat(b.cap_rate) > parseFloat(a.cap_rate) ? 1 : -1)
    }

    if (type === "5Y Total Return") {
        return sortedProperties = propertiesArr
            .sort((a, b) => parseFloat(b.total_return_5yrs) > parseFloat(a.total_return_5yrs) ? 1 : -1)
    }

    if (type === "Annualized Return") {
        return sortedProperties = propertiesArr
            .sort((a, b) => parseFloat(b.annualized_return) > parseFloat(a.annualized_return) ? 1 : -1)
    }

    if (type === "Year Built"){

        return sortedProperties = propertiesArr
            .sort((a, b) => parseFloat(b.year_built) > parseFloat(a.year_built) ? 1 : -1)
    }



}