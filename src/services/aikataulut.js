import axios from 'axios'
const date = new Date();
const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",];
let day = date.getDay() - 1

console.log("mikä päivä välillä 0-6",day)
console.log("mikä päivä on",days[day])
const Url = 'https://data.itsfactory.fi/journeys/api/1/stop-monitoring?stops=0829'
const Url2= `https://data.itsfactory.fi/journeys/api/1/journeys?stopPointId=0829&dayTypes=${days[day]}`
const Url3= `https://data.itsfactory.fi/journeys/api/1/journeys?startIndex=70&stopPointId=0829&dayTypes=${days[day]}`

const getAll = () => {
    const request = axios.get(Url)
    console.log("onnistui", request)
    return request.then(response =>response.data)
}

const getStop = () =>{
    let aika=new Date(new Date().getTime()+120 *60000).toLocaleTimeString('en-GB', { timeZone: 'UTC' })
    console.log("paljon kello on",aika )
    console.log( aika> "13:00:00")

    if( aika> "13:00:00"){
        const request = axios.get(Url3)
        console.log("noudettu pysäkit url13", request)
        return request.then(response =>response.data)
    }
    else{
        const request = axios.get(Url2)
        console.log("noudettu pysäkit", request)
        return request.then(response =>response.data)
    }
}
const get ={
    getAll,
    getStop
}

export default get