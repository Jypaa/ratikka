import { useState, useEffect } from 'react'
import Aikataulut from './components/Aikataulut'
import Pysakit from './components/Pysakit'
import Aikatauluservice from './services/aikataulut'

const App = () => {

  const[saapuminen, setSaapuminen]= useState([])
  const[pysakit, setPysakit]= useState([])

  //live Saaapuminen: https://data.itsfactory.fi/journeys/api/1/stop-monitoring?stops=0829
  //Aikatauluja ekat 100 https://data.itsfactory.fi/journeys/api/1/journeys?stopPointId=0829&dayTypes=${days[day]}
  //loput aikataulusta https://data.itsfactory.fi/journeys/api/1/journeys?startIndex=70&stopPointId=0829&dayTypes=${days[day]}

  //Haetaan seuraavaksi saapuvat sovelluksen käynnistyessä
  useEffect(() => {
    Aikatauluservice
      .getAll()
      .then(response => {
        console.log('onnistuiko aikataulu', response)
        setSaapuminen(response.body["0829"])
        console.log('mitä tallentuu saapumiseenä',response.body["0829"])
      })  
  },[])

  //Haetaan aikataulut sovelluksen käynnistyessä
  useEffect(() => {
    Aikatauluservice
      .getStop()
      .then(response => {  
          console.log('onnistuiko pysäkit', response)  
          setPysakit(response.body)
      }) 
  },[])

//Haetaan pysäkit uudelleen ajan kuluttua
useEffect(() => {
      let aika = setInterval(() => {
        setPysakit([])
        Aikatauluservice
        .getStop()
        .then(response => {
            console.log('onnistuiko uudelleen pysäkkien nouto', response.body)
            setPysakit(response.body)
        })
      }, 1800000);
      return () => {
        clearInterval(aika);
      };
  }, []);
  
 //Haetaan aikataulut uudelleen ajan kuluttua
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
      <div className='saapuvat'>
          <h2>SAAPUVAT</h2>
        <ul>
          {saapuminen.map(saapuminen =>
            <Aikataulut ajat={(saapuminen)}/> //Tulostetaan saapuvat
          )}
        </ul>  
      </div>
      <div className='pysakit'>
      <h2>AIKATAULUT</h2>
        <ul>
            {pysakit.map(pysakit =>
              <Pysakit pysakit={(pysakit)}/> //Tulostetaan aikataulut
            )}
        </ul>  
      </div>
    </div>
  );
}

export default App;