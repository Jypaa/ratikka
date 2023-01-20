import { useState, useEffect } from 'react'
import Aikataulut from './components/Aikataulut'
import Pysakit from './components/Pysakit'
import Aikatauluservice from './services/aikataulut'
const App = () => {

  const[saapuminen, setSaapuminen]= useState([])
  const [showAll, setShowAll] = useState(true)
  const[pysakit, setPysakit]= useState([])

  //Aikatauluja https://data.itsfactory.fi/journeys/api/1/journeys?stopPointId=0829
  //live Saaapuminen: https://data.itsfactory.fi/journeys/api/1/stop-monitoring?stops=0829

  useEffect(() => {

    Aikatauluservice
      .getAll()
      .then(response => {
        console.log('onnistuiko', response)
        setSaapuminen(response.body["0829"])
        console.log('mitä tallentuu saapumiseenä',response.body["0829"])
      })
      
    
  },[])

  useEffect(() => {

    Aikatauluservice
      .getStop()
      .then(response => {
        
          setPysakit(response.body)
          
      
      })
      
    
  },[])
 
 /*  
useEffect(() => {
      let interval = setInterval(() => {
        setPysakit([])
        Aikatauluservice
        .getStop()
        .then(response => {
        
            setPysakit(response.body)
          
      }, 30000);
      return () => {
        clearInterval(interval);
      };
    }, []);
  })
  */
  useEffect(() => {
    let interval = setInterval(() => {
      setSaapuminen([])
      Aikatauluservice
      .getAll()
      .then(response => {
        console.log(response.body["0829"][0].call.vehicleAtStop)
        if(response.body["0829"][0].call.vehicleAtStop === false){
           console.log('onnistuiko', response)
            setSaapuminen(response.body["0829"])
        }
        else{
            console.log('triggeröi tämä', response.body["0829"][1])
            setSaapuminen(response.body["0829"][1])
        }     
      })
  
    }, 15000);
    return () => {
      clearInterval(interval);
    };
  }, []);
/*
  const saapuvatShow = showAll
  ?saapuminen
  :saapuminen.filter(saapuva => saapuva.body["0829"][0])
*/



  return (
    <div>
  
      <ul>
        {saapuminen.map(saapuminen =>
          <Aikataulut ajat={(saapuminen)}/>
        )}
      </ul>  
      
   
      <ul>
          {pysakit.map(pysakit =>
            <Pysakit pysakit={(pysakit)}/>
          )}
      </ul>
    
    </div>
  );
}



export default App;

//yhdeksän minuuttia ennen seuraavan saapumista