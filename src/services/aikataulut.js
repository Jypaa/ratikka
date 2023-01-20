import axios from 'axios'
const Url = 'https://data.itsfactory.fi/journeys/api/1/stop-monitoring?stops=0829'
const Url2= 'https://data.itsfactory.fi/journeys/api/1/journeys?stopPointId=0829'

const getAll = () => {
    const request = axios.get(Url)
    console.log("onnistui", request)
    return request.then(response =>response.data)
}

const getStop = () =>{
    const request = axios.get(Url2)
    console.log("noudettu pysäkit", request)
    return request.then(response =>response.data)
}

export default {getAll, getStop}