// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $searchBtn = document.querySelector("#search");
var $cityInput=document.querySelector("#city");
var $stateInput= document.querySelector("#state");
var $countryInput= document.querySelector("#country");
var $shapeInput= document.querySelector("#shape");
var $durationInput= document.querySelector("#duration");



// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredAddresses to dataSet initially
var AlienData = dataSet;
// console.log(addressData)

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < AlienData.length; i++) {
    // Get get the current address object and its fields
    var Sighting = AlienData[i];
    var fields = Object.keys(Sighting);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = Sighting[field];
    }
  }
}

function handleSearchButtonClick()
 {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  // null, undefined, false, '', 0 ====> falsy
  // everything else is truthy
  var filterDate = $dateInput.value.trim().toLowerCase();
  var filterCity= $cityInput.value.trim().toLowerCase();
  var filterState= $stateInput.value.trim().toLowerCase();
  var filterCountry=$countryInput.value.trim().toLowerCase();
  var filterShape=$shapeInput.value.trim().toLowerCase();
  AlienData = dataSet.filter(function(Sighting) {
    var addressDate = Sighting.datetime.toLowerCase();
    var addressCity = Sighting.city.toLowerCase();
    var addressState= Sighting.state.toLowerCase();
    var addressCountry = Sighting.country.toLowerCase();
    var addressShape= Sighting.shape.toLowerCase();
    // var addressDuration= Sighting.durationMinutes.toLowerCase();

    if (filterDate && filterDate != addressDate) {return false;}
    if (filterCity && filterCity != addressCity) {return false;}
    if (filterState && filterState != addressState) {return false;}
    if (filterCountry && filterCountry != addressCountry) {return false;}
    if (filterShape && filterShape != addressShape) {return false;}
    
    
    

    return true;
    console.log("yay");
  });
  renderTable();
console.log("success");
};

// Render the table for the first time on page load
renderTable();