const { getTrips, getDriver, getVehicle } = require('api');

/**
 * This function should return the trip data analysis
 *
 * Question 3
 * @returns {any} Trip data analysis
 */
async function analysis() {
  // Your code goes here

  const trips = await getTrips()
     console.log(trips)
     
     const analysis = {
       noOfCashTrips: 0,
       noOfNonCashTrips: 0,
       billedTotal: 0,
       cashBilledTotal: 0,
       nonCashBilledTotal: 0,
       noOfDriversWithMoreThanOneVehicle: 0,
       mostTripsByDriver: {
         name: "",
         email: "",
         phone: "",
         noOfTrips: 0,
         totalAmountEarned: 0,
        },
        highestEarningDriver: {
          name: "",
          email: "",
          phone: "",
          noOfTrips: 0,
          totalAmountEarned: 0,
        }
      }
      
      
      const billConvert = (billedAmount) => {
        return Number(billedAmount.toString().replace(',', ''))
      }
      let uniqueDriver = {}
      let amount = 0
      let length = 0
      trips.forEach(item =>{
        if(uniqueDriver[item.driverID]){
          uniqueDriver[item.driverID] ++
        }else{
          uniqueDriver[item.driverID] = 1
        }
      })
        for(let correctId of Object.keys(uniqueDriver)){
          if(correctId.length === 36){
            let highest = trips.filter(item => item.driverID === correctId)
              let reduce = highest.reduce((acc, cur) =>acc +billConvert(cur.billedAmount) ,0)
             const driver = await getDriver(correctId)
             console.log(driver)
             if(driver.vehicleID.length > 1){
              analysis.noOfDriversWithMoreThanOneVehicle++
             }
              if(highest.length > length){
                length= highest.length
                analysis.mostTripsByDriver = {
                  name:driver.name,
                  email:driver.email,
                  phone:driver.phone,
                  noOfTrips:highest.length,
                  totalAmountEarned:reduce

                }
              } 
             if(reduce > amount ){
                amount = reduce
                
                analysis.highestEarningDriver ={
                  name:driver.name,
                  email:driver.email,
                  phone:driver.phone,
                  noOfTrips:highest.length,
                  totalAmountEarned:reduce
                }
              }
          }
        }
      
      const tripObj = {}
     

      trips.forEach((id) => {
        if(Object.keys(tripObj).includes(id)) {
          tripObj[id].numberOfTrips++
          tripObj[id].totalAmountEarned+=billConvert(id.billedAmount)
        }else{
          tripObj[id] = {
             numberOfTrips: 1,
             totalAmountEarned: billConvert(id.billedAmount)
          }
        } 
      })
     
      
      trips.forEach(async(trip) => { 
        if(trip.isCash === true){
          analysis.noOfCashTrips++
          analysis.cashBilledTotal+=billConvert(trip.billedAmount)
        }else {
          analysis.noOfNonCashTrips++
            analysis.nonCashBilledTotal+=billConvert(trip.billedAmount)
          }
          analysis.billedTotal = analysis.cashBilledTotal + analysis.nonCashBilledTotal
        })
        

        console.log(analysis)   
       
          
}
  analysis()

  module.exports = analysis;