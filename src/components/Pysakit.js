const Pysakit =({pysakit})=>{
    //["0829"][0].call.expectedArrivalTime
    //["0829"][0].call.expectedArrivalTime
    //[0].call.expectedArrivalTime
    
   // console.log("tässä on ",pysakit)
    let aika=new Date(new Date().getTime()+129 *60000).toLocaleTimeString('en-GB', { timeZone: 'UTC' })
    //console.log('aika ny',aika )
    console.log('pysäkit',pysakit.calls[5].arrivalTime)
    console.log('pysäkit',typeof(pysakit.calls[5].arrivalTime))
    console.log('asetus', aika)
    console.log('asetus', typeof(aika))
    console.log(pysakit.calls[5].arrivalTime >= aika)
    if(pysakit.calls[5].arrivalTime >= aika){
       return(
            <ul>
       
                {pysakit.calls[5].arrivalTime}

            </ul>
        )}
   
    else{
        return(<p>ei vanunuja</p>)
    }
}    
       
//Vika että apista saa vaan dataa klo 15.59 asti
//{ajat.call.expectedArrivalTime.slice(11,16)}    
export default Pysakit