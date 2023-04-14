p = document.getElementById("title");

// Get today's date and turn it into a string
var dateObject = new Date();
var month = dateObject.getMonth() + 1;
var day = dateObject.getDate() + 1;
var date = month.toString() + '/' +  day.toString();

// Add today's date to the p element
p.appendChild(document.createTextNode(date));