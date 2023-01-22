const Aikataulut =({ajat})=>{
    //["0829"][0].call.expectedArrivalTime
    //["0829"][0].call.expectedArrivalTime
    //[0].call.expectedArrivalTime
    //let aika=new Date(new Date().getTime()+120*60000).toLocaleTimeString('en-GB', { timeZone: 'UTC' }).slice(0,5)
    //console.log('aika', aika)
    //let minuutit = ajat.call.expectedArrivalTime.slice(11,16)-aika
    //console.log('tuloaika', ajat.call.expectedArrivalTime.slice(11,16))
    //console.log('aikaa jäljellä', minuutit)
    let aika=new Date(new Date().getTime()+120 *60000).toLocaleTimeString('en-GB', { timeZone: 'UTC' }).slice(3,5)
    //console.log("aika",aika)
    if(ajat.call.vehicleAtStop === false){ 
       
        let saapuminen = (ajat.call.expectedArrivalTime.slice(14,16))
        //console.log("saapuminen", saapuminen)
        if((parseInt(saapuminen) - parseInt(aika)) <= 5){         
            return(
            <ul className="aikatauluKiire">       
                {ajat.call.expectedArrivalTime.slice(11,16)}
            </ul>
        )
            }
        else{
            return(
                <ul className="aikatauluEikiire">       
                    {ajat.call.expectedArrivalTime.slice(11,16)}
                </ul>
        )}
   }
   else{
        return(<p></p>)
   }
}

export default Aikataulut