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

	svg.selectAll("rect")
	    .data([50, 40, 30])
	    .enter()
	    .append("rect")
	    .attr({
	        "width": function(d) {
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



	// draw the bars
	viz.selectAll("rect")
		.data(testData01)
		.enter()
		.append("rect")
		.attr({
			"width": 40,
			"height": function(d, i) {
			    return d.score * 3;
			},
			"x": function(d, i) {
			    return (i * 70) + 40;
			},
			"y": function(d, i) {
			    return h - (d.score * 3) - 50;
			},
			"class": function(d, i) {
			    if (d.score < 60) {
			        return "fail";
			    }
			},
			"desc": function(d, i) {
				return d.score;
			}
	    });



	// draw the names
	viz.selectAll("text.name")
		.data(testData01)
		.enter()
		.append("text")
		.text(function(d, i) {
		    return d.name;
		})
		.attr({
			"x": function(d, i) {
			    return (i * 70) + 60;
			},
			"y": 370,
			"text-anchor": "middle"
		});



	// draw the base line
	viz.append("line")
		.attr({
			"x1": 50,
			"x2": 750,
			"y1": 350,
			"y2": 350,
			"stroke-width": 1,
			"stroke": "#ccc"
		});



  // ----------------------------------------------------------------------------------------------------------------
  // INTERACTION

	// hover event interaction
	$("#viz rect").on("mouseenter", function() {
		var self = $(this);
		// fade out slightly
		self.animate({"opacity":.8}, 100);
		// change the position of the "score-popup" div, its content (to reflect the score), then show it
		$("#score-popup")
			.css({
				"left": parseInt(self.position().left) + parseInt(self.attr("width")) - 55,
				"top": self.position().top - 40
			})
			.text(self.attr("desc"))
			.stop(true,true)
			.fadeIn(50);
	}).on("mouseleave", function() {
		var self = $(this);
		// fade the bar back in
		self.animate({"opacity":1}, 100);
		// fade out the score
		$("#score-popup").stop(true,true).fadeOut(50);
	});



	// create a function that controls the transition
	function updateData(target, dataset) {
    target.selectAll("rect")
		  .data(dataset)
		  .transition()
		  .duration(500)
		  .attr({
		  	"width": 40,
		  	"height": function(d, i) {
		  	    return d.score * 3;
		  	},
		  	"x": function(d, i) {
		  	    return (i * 70) + 40;
		  	},
		  	"y": function(d, i) {
		  	    return h - (d.score * 3) - 50;
		  	},
		  	"class": function(d, i) {
		  	    if (d.score < 60) {
		  	        return "fail";
		  	    }
		  	},
		  	"desc": function(d, i) {
		  		return d.score;
		  	}
	      });
	};



	// link the click functions to the datasets
	$("#test-01").on("click", function() {
  	updateData(viz, testData01);
  	return false;
	});	

	$("#test-02").on("click", function() {
  	updateData(viz, testData02);
  	return false;
	});	

	$("#test-03").on("click", function() {
  	updateData(viz, testData03);
  	return false;
	});	

	$("#test-04").on("click", function() {
  	updateData(viz, testData04);
  	return false;
	});	



	// trigger the "active" state
	$(".update-data").on("click", function() {
  	$(".update-data").removeClass("selected");
  	$(this).addClass("selected");
	});



});

