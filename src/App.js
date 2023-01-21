import { useState, useEffect } from 'react'
import Aikataulut from './components/Aikataulut'
import Pysakit from './components/Pysakit'
import Aikatauluservice from './services/aikataulut'
const App = () => {

  const[saapuminen, setSaapuminen]= useState([])
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
 
useEffect(() => {
      let aika = setInterval(() => {
        setPysakit([])
        Aikatauluservice
        .getStop()
        .then(response => {
            console.log('TÄÄÄÄÄ ONNISTUUUU', response.body)
            setPysakit(response.body)
        })
      }, 3600000);
      return () => {
        clearInterval(aika);
      };
    }, []);
  
 
  useEffect(() => {   
    let interval = setInterval(() => {     
      setSaapuminen([])
      Aikatauluservice
      .getAll()
      .then(response => {
            setSaapuminen(response.body["0829"]) 
        })
    }, 15000);
    return () => {
      clearInterval(interval);
    };
  }, []);

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