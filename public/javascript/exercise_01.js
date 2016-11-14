var container = d3.select("body").append("div").classed("container",true);

var createChart = function(numbers){
	var bars = container.selectAll("div").data(numbers);

	bars.enter()
	.append("div")
	.classed("h_bar",true);

	bars.transition()
		.duration(1000)
		.text(function(d){return d})
		.style("width",function(d){
			return (d*5) + "px" ;
		});	
}

var data = random_nums(10,100);
createChart(data);

setInterval(function(){
	data.shift();
	data.push(randInt(100))
	createChart(data)
},2000);