const Aikataulut =({ajat})=>{
    //["0829"][0].call.expectedArrivalTime
    //["0829"][0].call.expectedArrivalTime
    //[0].call.expectedArrivalTime
  
    console.log("tässä",ajat)
    console.log(ajat.call.expectedArrivalTime.slice(11,16))

        return(
            <ul>
       
                {ajat.call.expectedArrivalTime.slice(11,16)}

            </ul>
        )
   
}
//{ajat.call.expectedArrivalTime.slice(11,16)}    
export default Aikataulut