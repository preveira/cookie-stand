'use strict';
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Object constructor for a location
function City(cityName, minCustomers, maxCustomers, avgCookiesPerCustomer) {
  this.cityName = cityName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.hourlySales = [];
  this.simulateHourlySales = function () {
    var randomCustomers = getRandomInt(this.minCustomers, this.maxCustomers);
    var cookiesPurchased = Math.floor(randomCustomers * this.avgCookiesPerCustomer);
    this.hourlySales.push(cookiesPurchased);
    return cookiesPurchased;
  };
}
// Creating instances for each location
var seattle = new City("Seattle", 23, 65, 6.3);
var tokyo = new City("Tokyo", 3, 24, 1.2);
var dubai = new City("Dubai", 11, 38, 3.7);
var paris = new City("Paris", 20, 38, 2.3);
var lima = new City("Lima", 2, 16, 4.6);
var cities = [seattle, tokyo, dubai, paris, lima];
// Simulate hourly sales for 14 hours starting from 6am
for (var hour = 6; hour <= 19; hour++) {
  cities.forEach(function (city) {
    var displayHour = hour <= 12 ? hour + 'am' : (hour - 12) + 'pm';
    console.log(city.cityName + ', ' + displayHour + ': ' + city.simulateHourlySales() + ' cookies');
  });
}
// Display simulated amounts of cookies purchased for each city and hour as unordered lists
cities.forEach(function (city) {
  displayArrayAsList(city.cityName);
  for (var i = 0; i < city.hourlySales.length; i++) {
    var displayHour = i + 6 <= 12 ? i + 6 + 'am' : (i + 6 - 12) + 'pm';
    displayArrayAsList(displayHour + ': ' + city.hourlySales[i] + ' cookies');
  }
  displayArrayAsList("Total: " + city.hourlySales.reduce((acc, val) => acc + val, 0) + " cookies");
});
// Function to display an array as an unordered list in the browser
function displayArrayAsList(label, array) {
  var listItem = document.createElement('li');
  listItem.textContent = label;
  if (Array.isArray(array)) {
    var unorderedList = document.createElement('ul');
    array.forEach(function (item) {
      var listItem = document.createElement('li');
      listItem.textContent = item;
      unorderedList.appendChild(listItem);
    });
    document.body.appendChild(unorderedList);
  } else {
    document.body.appendChild(listItem);
  }
}


// let bodyElement = document.getElementById('table-data');
// bodyElement.appendChild(tableRow);
// let tabelRow = document.createElement('tr');
// body

// let tableCell1 = document.createElement('td');
// tableRow.appendChild(tableCell1) //appends the element to the document (writes it in)
// tableCell1.textContent = 'Pikachu';

