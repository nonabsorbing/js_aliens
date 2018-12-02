// from data.js
var tableData = data;

var tbody = d3.select("tbody");



function fillTable(fillItUp){

  //clear all rows before filtering
  tbody.html("");

  fillItUp.forEach(function(ufoSightings) {

    // console.log(ufoSightings);

    var row = tbody.append("tr");

    Object.values(ufoSightings).forEach((val) => {
      console.log(val);

      var cell = row.append("td");

      cell.text(val); 
    });
  });
}



//set up function for when filter is filled in and clicked
function handleClick(event) {

   // Prevent the page from refreshing

   d3.event.preventDefault();

      // // Select the input element and get the raw HTML node
      var sightingDate = d3.select("#datetime").property("value");
            
        // // Get the value property of the input element
      console.log(sightingDate);


      // // Set up filter variable - based on filtering 
      var filteredData = data.filter(sighting => sighting.datetime === sightingDate);

          console.log(filteredData);
         

    fillTable(filteredData); 
}


// //update table data
 d3.selectAll("#filter-btn").on("click", handleClick);

 fillTable(data); 
