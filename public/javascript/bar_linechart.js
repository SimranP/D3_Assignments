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

	d3.select(".linePath").remove();
	var g = d3.select(".group");
	var path = g.append('path').classed("linePath",true);

	var line = d3.line()
			.x(function(d,i) { return _xScale(i+1)})
			.y(function(d) { return _yScale(d)});	

	path.attr('d',line(data));
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

	_svg.append('g')
		.attr('transform', 'translate('+70+', '+ MARGIN.left +')')
		.classed("group",true);

	g.selectAll(".bar").data(random_nums(length))
			.enter()
			.append("rect")
			.classed("bar",true)
			.attr("width", 20)
			.attr("x",function(d,i){return _xScale(i+1)})
			.attr("y",function(d){return INNER_HEIGHT})
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
,3000);