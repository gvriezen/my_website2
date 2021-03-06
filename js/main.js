/*Grace Vriezen's Module 2 */

//note: spelled out $ since dollar signs weren't working originally

// cities table

// minneapolis 400,070, saint paul 294,873, rochester 110724 Duluth 86128

//initialize function
function initialize () {
	cities();
	debugAjax();
	
};


//create table

function cities () {
var cityPop = [
	{
		city: 'Minneapolis',
		population: 400070
	},
	{
		city: 'Saint Paul',
		population: 294873
	},
	{ 	city:'Rochester',
		population: 110724
	},
	{
		city:'Duluth',
		population: 86128
	}
];

//append table to div

$("#mydiv").append("<table>");
$("table").append("<tr>");
$("tr").append("<th>City</th><th>Population</th>");

//create for loop

for (var i = 0; i < cityPop.length; i++) {
	var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
	$("table").append(rowHtml);

	};

	addColumns(cityPop);
	addEvents();

};

//debug script

function addColumns(cityPop){
    
    $('tr').each(function(i){

    	if (i == 0){
    		
    		
    		// append is spelled wrong

    		$(this).append('<th>City Size</th>');
    	
    	} else {
    		

    		var citySize; 


    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			//no camel case on citySize
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

    		//no closing carrot on td tag
    		//add parentheses around this

    		$(this).append('<td>' + citySize + '</td>');
    	};

    });

};



function addEvents(){
	//no hashtag, table is not an id

	$('table').mouseover(function(){

		
		var color = "rgb(";
		//change var i=1 not i=0

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			//no quotes around random

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};

		$(this).css('color', color);

		//extra parentheses in closing syntax
	};

	function clickme(){

		alert('Minnesota is awesome!');
	};

	$('table').on('click', clickme);
//missing parentheses in closing syntax
});

}

///ajax debug script 
//callback
function debugCallback(response){

	//check the data, console log should load, is within callback
	console.log(response);

	//change JSON.stringify(mydata)); to JSON.stringify(response)); since that is what you are using in the callback function
	
	$(mydiv).append('GeoJSON data: ' + JSON.stringify(response));
};

function debugAjax(){
	
	var mydata;
	//basic ajax method

	$.ajax("data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){
			//set my data = response
			mydata = response;
			debugCallback(mydata);
			//change debugCallback to console.log instead
			//check the data, should load, is within callback
			
			console.log(mydata);
		}
	});
	//check the data should not print to console, response is not defined

	console.log (mydata);
	
		$(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(response));

};	

jQuery(document).ready(initialize);

//don't need this to work with previous code
	//delete };

//$(mydiv).append('GeoJSON data: ' + JSON.stringify(response));