const Aikataulut =({ajat})=>{
    //["0829"][0].call.expectedArrivalTime
    //["0829"][0].call.expectedArrivalTime
    //[0].call.expectedArrivalTime
    //let aika=new Date(new Date().getTime()+120*60000).toLocaleTimeString('en-GB', { timeZone: 'UTC' }).slice(0,5)
    //console.log('aika', aika)
    //let minuutit = ajat.call.expectedArrivalTime.slice(11,16)-aika
    //console.log('tuloaika', ajat.call.expectedArrivalTime.slice(11,16))
    //console.log('aikaa jäljellä', minuutit)
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
        return(<p></p>)
   }
}

export default Aikataulut