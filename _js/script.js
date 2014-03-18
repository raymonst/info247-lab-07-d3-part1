// ----------------------------------------------------------------------------------------------------------------
// DATA

var testData01 = [
  {"name": "Andy", "score": 71},
  {"name": "Brad", "score": 59},
  {"name": "Chloe", "score": 79},
  {"name": "David", "score": 95},
  {"name": "Emma", "score": 67},
  {"name": "Felicia", "score": 42},
  {"name": "Gary", "score": 86},
  {"name": "Hector", "score": 96},
  {"name": "Imani", "score": 78},
  {"name": "Jai", "score": 83}
];

var testData02 = [
  {"name": "Andy", "score": 78},
  {"name": "Brad", "score": 57},
  {"name": "Chloe", "score": 74},
  {"name": "David", "score": 91},
  {"name": "Emma", "score": 59},
  {"name": "Felicia", "score": 67},
  {"name": "Gary", "score": 72},
  {"name": "Hector", "score": 92},
  {"name": "Imani", "score": 89},
  {"name": "Jai", "score": 72}
];

var testData03 = [
  {"name": "Andy", "score": 82},
  {"name": "Brad", "score": 63},
  {"name": "Chloe", "score": 82},
  {"name": "David", "score": 89},
  {"name": "Emma", "score": 65},
  {"name": "Felicia", "score": 57},
  {"name": "Gary", "score": 81},
  {"name": "Hector", "score": 87},
  {"name": "Imani", "score": 94},
  {"name": "Jai", "score": 83}
];

var testData04 = [
  {"name": "Andy", "score": 79},
  {"name": "Brad", "score": 56},
  {"name": "Chloe", "score": 82},
  {"name": "David", "score": 94},
  {"name": "Emma", "score": 67},
  {"name": "Felicia", "score": 72},
  {"name": "Gary", "score": 85},
  {"name": "Hector", "score": 86},
  {"name": "Imani", "score": 92},
  {"name": "Jai", "score": 81}
];



// ----------------------------------------------------------------------------------------------------------------

$(document).ready(function() {

  // ----------------------------------------------------------------------------------------------------------------
  // INITIAL SETUP

	var w = 800;
	var h = 400;
	var viz = d3.select("#viz");
	viz.attr("width", w).attr("height", h);



  // ----------------------------------------------------------------------------------------------------------------
  // CHART

	/* recall the basic example:

  viz.selectAll("rect")
    .data([50, 40, 30])
    .enter()
    .append("rect")
    .attr({
      "height": function(d) {
        return d;
      }
    });

	*/



	// draw the bars
	/* use the basic example as a starting point, then modify the attributes accordingly:
	- "width": width of the bar
	- "height": height of the bar
	- "x": horizontal location of the bar
	- "y": vertical location of the bar
	- "class": css class; use conditionals to detect if the score is below 60; then, you can add a css class (".fail") to change the bar's appearance
	- "desc": custom metadata; use this attribute to store the student's score

	*/



	// draw the names
	/* attributes to modify: 
	- "x": horizontal location of the names
	- "y": vertical location of the names
	- "text-anchor": orientation of the text

	*/



	/* to append an SVG element that's not bound to a data point, simply use .append():

  viz.append("line")
    .attr({
      ...
    });

	*/



	// draw the base line using the previous example
	/*
  attributes to modify: 
	- "x1": starting x-coordinate
	- "x2": ending x-coordinate
	- "y1": starting y-coordinate
	- "y2": ending y-coordinate
	- "stroke-width": the line's width
	- "stroke": the line's color

	*/



	/* to work with a transition, use this example as a starting point:

  viz.selectAll("rect")
    .data([20, 50, 40])
    .transition()
    .duration(500)
    .append("rect")
    .attr({
      "height": function(d) {
        return d;
      }
    });

	*/

	/* after you figure out how the transition works, you can generalize it into a function. 
	this function can then be called after a user click, for example.

	function updateData(target, dataset) {
	};
	*/




  // ----------------------------------------------------------------------------------------------------------------
  // INTERACTION

	// hover event interaction
	// when the cursor enters the bar,
	$("#viz rect").on("mouseenter", function() {
		// fade out the bar slightly
		// target the "#score-popup" div
		// change its position so it lines up with the bar
		// change its content to reflect the score
		// then finally, show the div
	}).on("mouseleave", function() {
		// return the bar back to full opacity
		// and hide the "#score-popup" div
	});


 
	// link the click functions to the datasets
	$("#test-01").on("click", function() {
  	// call the transition here
  	return false;
	});	

	$("#test-02").on("click", function() {
  	// call the transition here
  	return false;
	});	

	$("#test-03").on("click", function() {
  	// call the transition here
  	return false;
	});	

	$("#test-04").on("click", function() {
  	// call the transition here
  	return false;
	});	



	// trigger the "active" state
	$(".update-data").on("click", function() {
  	// remove existing "selected" class
  	// and add "selected" class to the clicked link
	});



});

