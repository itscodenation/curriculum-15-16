// You will perform all your work in this file. 

// Paste your API key here
var api_key = "";

/************** TASK 1 **************/  
//  
// This function should get the whole set of complaint data from the server and then 
// update the heatmap with it. 
//
// SUB TASKS:
// 1) Use getJSON to get the complaint data from the server.
// 2) Pass the retrieved data to a callback function. This function should iterate through
//    each complaint and stuff it in an array that holds Google map LatLng objects
//	  e.g. new google.maps.LatLng(latitude, longitude)
// 3) Call updateHeatmap() and pass this array as a parameter to it.
function getComplaintData()
{
	// YOUR CODE GOES HERE
}

/************** TASK 2 **************/ 
//   
// This function should get the whole set of complaint types from the server and then 
// populate the complaint type menu with it. 
//
// SUB TASKS:
// 1) Use getJSON to get the complaint types from the server.
// 2) Pass the retrieved data to a callback function. This function should iterate through
//    each complaint type and stuff it in the dropdown menu. 
function populateComplaintTypeMenu()
{
	// YOUR CODE GOES HERE
}

/************** TASK 3 **************/    
//
// You will need to write a handler function that updates the heat map after the user has
// selected a complaint type. 
//
// SUB TASKS:
// 1) Get the complaint type the user selected
// 2) Use getJSON to get the complaint data from the server and pass this complaint type as a parameter.
// 3) Pass the retrieved data to a callback function. This function should iterate through
//    each complaint and stuff it in an array that holds Google map LatLng objects
//	  e.g. new google.maps.LatLng(latitude, longitude)
// 4) Call updateHeatmap() and pass this array as a parameter to it.
$(document).ready(function()
{
	// YOUR CODE GOES HERE	
});
