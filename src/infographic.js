/* Interactive Infographic */
function runInfographic (){
	
		animateValue(objectEmission, 0, objectEmission.innerHTML,1500);
    	animateValue(objectDistance, 0, objectDistance.innerHTML, 1500);
    	animateValue(objectCity, 0, objectCity.innerHTML, 500);
		// Set the values for the different charts and labels

		console.log(objectEmission);

		$("#chart1_bar2 .label").text(totalEmission);
		$("#chart1_bar1 .label").text($("#td3_2").text());
		$("#2009aid").text("$"+$("#td4_2").text()+"m");
		$("#2010aid").text("$"+$("#td4_3").text()+"m");
		
		
		// Store the values from the table
	
		bar1 = parseInt($("#td3_2").text());		
		bar2 = parseInt($("#td2_2").text());
		bar3 = parseInt($("#td3_3").text());
		bar4 = parseInt($("#td2_3").text());	
		
		area1 = parseFloat($("#td4_2").text());
		area2 = parseFloat($("#td4_3").text());
		
		// Find the biggest value for the bar chart
		
		biggestbar = bar1;
		if (bar2>biggestbar)
			biggestbar = bar2;
		if (bar3>biggestbar)
			biggestbar = bar3;
		if (bar4>biggestbar)
			biggestbar = bar4;
		
		// Get the relative heights
		
		maxheight = 350;
		
		bar1height = (bar1/biggestbar) * maxheight;
		bar2height = (bar2/biggestbar) * maxheight;
		bar3height = (bar3/biggestbar) * maxheight;
		bar4height = (bar4/biggestbar) * maxheight;
		
		// Set the height using CSS
		
		$("#chart1_bar1").delay(500).animate({height:bar1height},1000);
		$("#chart1_bar2").delay(1000).animate({height:bar2height},1000);
		$("#chart2_bar1").delay(1500).animate({height:bar3height},1000);
		$("#chart2_bar2").delay(2000).animate({height:bar4height},1000);
		
		// Get the relative sizes
		
		maxwidth = 400;
		
		area1width = parseInt((area1/(area1+area2))*maxwidth);
		area2width = parseInt((area2/(area1+area2))*maxwidth);
		
		// Set the area using CSS
		
		$("#chart3_area1").delay(2500).animate({height:area1width,width:area1width},1000);
		$("#chart3_area2").delay(2500).animate({height:area2width,width:area2width},1000);
		
		// calculate percentage change of infections
		
		percentchangeinfections = parseInt(((1-((bar1+bar2)/(bar3+bar4)))*100)+100);
		//alert(percentchangeinfections+' percent drop');
		$("#percentchange").html("<span>decrease of</span>"+percentchangeinfections+"%");
		
		
		$("#barcharts").hover(function(){
			// you moved over the bar charts
			$("#areacharts").stop().animate({opacity:0.5});
		}, function(){
			// you moved out the bar charts	
			$("#areacharts").stop().animate({opacity:1});
		});
		
		$("#areacharts").hover(function(){
			// you moved over the bar charts
			$("#barcharts").stop().animate({opacity:0.5});
		}, function(){
			// you moved out the bar charts	
			$("#barcharts").stop().animate({opacity:1});
		});
		
		
		$("#data").hide();
		
	};