var container = d3.select("body").append("div").classed("container",true);

var color = d3.scaleOrdinal().domain([1,100]).range(["#0000ff",
"#003399",
"#007799",
"#4c00df",
"#66CCFF",
"#78D5E3",
"#089de3",
"#0000f6",
"#0895ff",
"#3232f7",
"#0099FF",
"#3399CC",
"#7f7ffa"]);

var createChart = function(numbers){
	var bars = container.selectAll("div").data(numbers);

	bars.enter()
		.append("div")
		.classed("h_bar",true);

	bars
			.text(function(d){return d})
			.style("background-color",function(d,i){return color(d)})
			.style("width",function(d){
				return (d*5) + "px";
			});	
}

var data = random_nums(10,100);
createChart(data);

setInterval(function(){
	data.shift();
	data.push(randInt(100))
	createChart(data)
},2000);