// from data.js
var tableData = data;

var tbody = d3.select("tbody");


data.forEach(function(ufoSightings) {
  // console.log(ufoSightings);
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(function([key, value]) {
    // console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
    var cell = tbody.append("td");
    cell.text(value);
  });
});

//set up function for when filter is filled in and clicked
function handleClick(event) {

  //set up submit variable 
    var submit = d3.selectAll("#submit").on("click", function() {
    // Prevent the page from refreshing
      d3.event.preventDefault();

      // // Select the input element and get the raw HTML node
      var inputElement = d3.select("#datetime");
            
        // // Get the value property of the input element
      var inputValue = inputElement.property("value");

      console.log(inputValue);


      //   //clear all rows before filtering
      // tbody.html("")

      // // Set up filter variable - based on filtering 
      // var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

      //   filteredData.forEach(function(filterSightings) {
      //     console.log(filterSightings);
      //     var row = tbody.append("tr");
      //     Object.values(filterSightings).forEach(function([key, value]) {
      //       console.log(key, value);

      //     var cell = tbody.append("td");
      //     cell.text(value);
});
}


// //update table data
 tbody.on("click", handleClick);

