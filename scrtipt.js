const linja = document.getElementById("Linja");
const tableBody = document.getElementById("tablebody");

function showTime(){
    var dt =  new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleString(); 
    setTimeout(showTime, 1000);  
 }
 
 const Linja = async () => {
    const response = await fetch(
      "http://data.itsfactory.fi/journeys/api/1/lines/3"
    );
    const data = await response.json();
    console.log("Data:", data);
    document.getElementById("Linja").innerHTML = data.body[0].name + " "+  data.body[0].description;
    console.log(typeof data);
    console.log(data.body[0].name);
    console.log(data.body[0].description);
  };


/*
  const ratikka = async () => {
    const response = await fetch(
        "https://data.itsfactory.fi/journeys/api/1/journeys?stopPointId=0829"
      );
      const data = await response.json();
      console.log("Data:", data);
      console.log(typeof data);
      const index = 0;
    for(let i; i<10; i++){
        
        const row = document.createElement("tr");   
        const cellDataArray = [
            index+1,
            data.body[0].calls[i].arrivalTime
            //data.body[index][index].lineRef,
            //body[0].calls[0].arrivalTime
            
          ];
          console.log("cellDataArray", cellDataArray);
    
          for (const cellData of cellDataArray) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(cellData);
      
            cell.appendChild(cellText);
      
            row.appendChild(cell);
          }
          tableBody.appendChild(row);
  };
  }

const ratikka = async () => {
    const response = await fetch(
        "https://data.itsfactory.fi/journeys/api/1/journeys?stopPointId=0829"
      );
      const data = await response.json();
      
      console.log("Data:", data);
      console.log(typeof data);
        console.log(data.body[0].calls[5].arrivalTime);
//if(data.body["0829"][index].lineref != null){
      Object(data).forEach((data,index) => {
        
        const row = document.createElement("tr");   
        
        const cellDataArray = [
          index + 1, 
          data.body[0].calls[index].arrivalTime
          //data.body[index][index].lineRef,
          //data.body[index].calls[index].arrivalTime,
          
        ];
    
        console.log("cellDataArray", cellDataArray);
    
        for (const cellData of cellDataArray) {
          const cell = document.createElement("td");
          const cellText = document.createTextNode(cellData);
    
          cell.appendChild(cellText);
    
          row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }) ;
} */
const ratikka = async () => {
    const response = await fetch(
        "https://data.itsfactory.fi/journeys/api/1/journeys?stopPointId=0829"
      );
      const data = await response.json();
      
      console.log("Data:", data);
      console.log(typeof data);
      console.log("pituus: ", Object.keys(data.body).length);
      var pituus = Object.keys(data.body).length
        console.log(data.body[0].calls[5].arrivalTime);
        console.log("pituus:::::", pituus);

    
      for ( let index = 0; index < pituus ;index++){
        //const cellDataArray;
        
        const row = document.createElement("tr");   
        if(data.body[index].dayTypes[0] == "monday" ){
        cellDataArray = [
          //index + 1 ,
          data.body[index].calls[5].arrivalTime
          //data.body[index][index].lineRef,
          //data.body[index].calls[index].arrivalTime,
        ];
    }
        console.log("cellDataArray", cellDataArray);
    
        for (const cellData of cellDataArray) {
          const cell = document.createElement("td");
          const cellText = document.createTextNode(cellData);
    
          cell.appendChild(cellText);
    
          row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
}

/*

const ratikka = async () => {
    console.log("Entering async function");
  
    const response = await fetch(
        "https://data.itsfactory.fi/journeys/api/1/journeys?stopPointId=0829"
    );
    
  
    const data = await response.json();
    console.log("Data:", data);
  
    tableBody.textContent = "";
  
    data.quotesArray.forEach((rowData, index) => {
      const row = document.createElement("tr");
  
      const cellDataArray = [
        index + 1,
        rowData.body[0].calls[index].arrivalTime,
      ];
      console.log("cellDataArray", cellDataArray);
  
      for (const cellData of cellDataArray) {
        const cell = document.createElement("td");
        const cellText = document.createTextNode(cellData);
  
        cell.appendChild(cellText);
  
        row.appendChild(cell);
      }
      tableBody.appendChild(row);
    });
  };


*/


 Linja();
 showTime();
 ratikka();