const Pysakit =({pysakit})=>{
    //["0829"][0].call.expectedArrivalTime
    //["0829"][0].call.expectedArrivalTime
    //[0].call.expectedArrivalTime
    
   // console.log("tässä on ",pysakit)
    let aika=new Date(new Date().getTime()+128 *60000).toLocaleTimeString('en-GB', { timeZone: 'UTC' })
 
    //console.log('aika ny',aika )
    //console.log('pysäkit',pysakit.calls[5].arrivalTime)
    //console.log('pysäkit',typeof(pysakit.calls[5].arrivalTime))
    //console.log('asetus', aika)
    //console.log('asetus', typeof(aika))
    //console.log(pysakit.calls[5].arrivalTime >= aika)

    //Tulostetaan Aikatauluja koska if lause ei täyty jos saapumis aika heti puolen yön jälkeen niin käytetään elsessä lähtöaikaa, koska ollaan 
    //niin lähellä pääte pysäkkiä
    if(pysakit.calls[5].arrivalTime >= aika){
            return(
            <ul className="pysakki">       
                {pysakit.calls[5].arrivalTime.slice(0,5)}
            </ul>
        )
    }
    else{
        if(pysakit.departureTime > aika){
            return(
                <ul className="pysakki">       
                    {pysakit.calls[5].arrivalTime.slice(0,5)}
                </ul>
            )
        }
        else{
            return(<p></p>)
        }
    }
}    
       

//{ajat.call.expectedArrivalTime.slice(11,16)}  
export default Pysakit