var _svg,_xScale,_yScale;

var  updateData = function(data){
	d3.selectAll("rect").data(data)
		.transition()
			.duration(2000)
			.attr("height",function(d ){return INNER_HEIGHT - _yScale(d)})
			.attr("x",function(d,i){return _xScale(i+1)})
			.attr("y",function(d){return _yScale(d)})
		.select("title")
			.text(function(d){return d});
};

var createChart = function(length){
	_svg = d3.select('body').append('svg')
			.attr('width',WIDTH)
			.attr('height',HEIGHT);

	_yScale = d3.scaleLinear().domain([0,100]).range([INNER_HEIGHT,0]);
	_xScale = d3.scaleLinear().domain([1,10]).range([0,INNER_WIDTH]);

	generateAxis(_svg,_xScale,_yScale);

	var g =  _svg.append('g')
		.attr('transform','translate('+60+','+MARGIN.left+')')
		.classed("bars",true);

	g.selectAll(".bar").data(random_nums(length))
			.enter()
			.append("rect")
			.attr("width", 20)
			.append("title");

	g.selectAll('rect').exit().remove();
}

var renderChart = function(data){
		createChart(data.length);
		updateData(data);	
};

var data = random_nums(10,100);

renderChart(data);
setInterval(function(){
	data.shift();
	data.push(randInt(100));
	updateData(data)	
}
,2500);