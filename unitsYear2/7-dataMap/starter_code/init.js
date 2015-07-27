// NOTE TO SCRIPTED STUDENTS: do not modify this file

var map, pointarray, heatmap;

function initialize() 
{
	var mapOptions = 
	{
		zoom: 13,
		center: new google.maps.LatLng(40.631284, -73.953953),
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		minZoom: 13,
		streetViewControl: false
	};
	pointarray = [];

	map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

	heatmap = new google.maps.visualization.HeatmapLayer({
		radius: 15,
		opacity: 1,
		maxIntensity: 50,
		dissipating: true
	});

	heatmap.setMap(map);

	getComplaintData();
}

function updateHeatmap(complaintData)
{
	var pointarray = new google.maps.MVCArray(complaintData);
	heatmap.setData(pointarray);
}

$(document).ready(function()
{
	// Dummy call so we can allow mixed (http & https) content early on.
	$.getJSON("http://google.com");
	
	$("#toggle-heatmap").click(function()
	{
		heatmap.setMap(heatmap.getMap() ? null : map);	
	});

	$("#change-gradient").click(function()
	{
		var gradient = 
		[
			'rgba(0, 255, 255, 0)',
			'rgba(0, 255, 255, 1)',
			'rgba(0, 191, 255, 1)',
			'rgba(0, 127, 255, 1)',
			'rgba(0, 63, 255, 1)',
			'rgba(0, 0, 255, 1)',
			'rgba(0, 0, 223, 1)',
			'rgba(0, 0, 191, 1)',
			'rgba(0, 0, 159, 1)',
			'rgba(0, 0, 127, 1)',
			'rgba(63, 0, 91, 1)',
			'rgba(127, 0, 63, 1)',
			'rgba(191, 0, 31, 1)',
			'rgba(255, 0, 0, 1)'
		];
  		
		heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
	});

	google.maps.event.addDomListener(window, 'load', initialize);
    
	populateComplaintTypeMenu(); 
});
