const linja = document.getElementById("Linja");
const tableBody = document.getElementById("tablebody");
const tableBody1 = document.getElementById("tablebody1");

function showTime() {
  var dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toLocaleString();
  setTimeout(showTime, 1000);
}

const Linja = async () => {
  const response = await fetch(
    "http://data.itsfactory.fi/journeys/api/1/lines/3"
  );
  const data = await response.json();
  console.log("Data:", data);
  document.getElementById("Linja").innerHTML = data.body[0].name + " " + data.body[0].description;
  console.log(typeof data);
  console.log(data.body[0].name);
  console.log(data.body[0].description);
};

const ratikka = async () => {
  const response = await fetch(
    "https://data.itsfactory.fi/journeys/api/1/journeys?stopPointId=0829"
  );
  const data = await response.json();

  console.log("Data:", data);
  console.log(typeof data);
  console.log("pituus: ", Object.keys(data.body).length);
  var pituus = Object.keys(data.body).length;

  console.log(data.body[0].calls[5].arrivalTime);

  console.log("pituus:::::", pituus);

  for (let indeksi = 0; indeksi < pituus; indeksi++) {
    if (data.body[indeksi].dayTypes[0] == "monday") {
      var pituus2 = Object.keys(data.body[indeksi].calls).length;
      console.log("pituus2:::::", pituus2);
      for (let joku = 0; joku < pituus2; joku++) {
        const row = document.createElement("tr");
        console.log("indeksi, joku", indeksi, joku);
        if (data.body[indeksi].calls[joku].stopPoint.shortName == "0829") {

          cellDataArray = [

            data.body[indeksi].calls[joku].arrivalTime
          ];

          console.log("cellDataArray", cellDataArray);

          for (const cellData of cellDataArray) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(cellData);

            cell.appendChild(cellText);

            row.appendChild(cell);
          }
        }
        tableBody.appendChild(row);
      }
    }
  }
};

const saapuva = async () => {
  const response = await fetch(
    "https://data.itsfactory.fi/journeys/api/1/stop-monitoring?stops=0829"
  );
  const data1 = await response.json();

  console.log("Data1:", data1);
  console.log(typeof data1);
  var pituus = Object.keys(data1.body).length;
  console.log("pituus:::::", pituus);

  for (let indeksi = 0; indeksi < pituus; indeksi++) {

    const row = document.createElement("tr");

    cellDataArray = [

      data1.body["0829"][indeksi].call.expectedArrivalTime.slice(11, 16)
    ];

    console.log("cellDataArray", cellDataArray);

    for (const cellData of cellDataArray) {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(cellData);

      cell.appendChild(cellText);

      row.appendChild(cell);
    }
    tableBody1.appendChild(row);
  }
};

Linja();
showTime();
ratikka();
saapuva();