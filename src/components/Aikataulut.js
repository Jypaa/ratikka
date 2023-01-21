const Aikataulut =({ajat})=>{
    //["0829"][0].call.expectedArrivalTime
    //["0829"][0].call.expectedArrivalTime
    //[0].call.expectedArrivalTime
  
    console.log("tässä",ajat)
    console.log('onko pysäkillä',ajat.call.vehicleAtStop)
    //console.log(ajat.call.expectedArrivalTime.slice(11,16))
    if(ajat.call.vehicleAtStop === false){
        
        return(
            <ul>      
                {ajat.call.expectedArrivalTime.slice(11,16)}
            </ul>
        )
   }
   else{
    return(
        <p></p>
    )
   }
}
//{ajat.call.expectedArrivalTime.slice(11,16)}    
export default Aikataulut