// get all events data.
// get csv of the following data: date, event, details, link

var data = require("./eventData.json")

const monthMap = {
    0 : "January",
    1 : "Feburary",
    2 : "March",
    3: "April", 
    4: "May",
    5: "June",
    6: "July", 
    7: "August", 
    8: "September",
    9: "October",
    10: "November",
    11: "December"
}

export const getEvents = (benchmark_date="10/10/2019") => {
    let bench_date = new Date(benchmark_date)  // MM-DD-YYYY
    let filteredData = data.data.filter(obj => {
        return(new Date(obj.date) > bench_date)
    })
    
    // sort entry by date
    filteredData.sort((a,b) => {
        return(new Date(a.date) - new Date(b.date))
    })
    return filteredData
}
