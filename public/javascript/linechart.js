var _svg,_xScale,_yScale;

var createChart = function(){
	_svg = d3.select('body').append('svg')
			.attr('width',WIDTH)
			.attr('height',HEIGHT);

	_yScale = d3.scaleLinear().domain([0,100]).range([INNER_HEIGHT,0]);
	_xScale = d3.scaleLinear().domain([1,10]).range([0,INNER_WIDTH]);

	generateAxis(_svg,_xScale,_yScale);

	// var xAxis = d3.axisBottom(_xScale).ticks(10);

	// var yAxis = d3.axisLeft(_yScale).ticks(10);



	var g = _svg.append('g')
		.attr('transform', 'translate('+(MARGIN.right) +', '+ MARGIN.left +')')
		.classed("group",true);

	// _svg.append('g')
	// 	.attr('transform', 'translate('+MARGIN.left+', '+(HEIGHT - MARGIN.top)+')')
	// 	.call(xAxis)
	// 	.classed('xAxis',true);

	_svg.selectAll('.xAxis .tick')
		.append('line')
		.attr('x1', 0)
		.attr('y1', 0)
		.attr('x2', 0)
		.attr('y2', -INNER_HEIGHT)
		.classed('grid', true);

	// _svg.append('g')
	// 	.attr('transform', 'translate('+(MARGIN.left)+', '+ MARGIN.left +')')
	// 	.call(yAxis)
	// 	.classed('yAxis',true);

	_svg.selectAll('.yAxis .tick')
		.append('line')
		.attr('x1', 0)
		.attr('y1', 0)
		.attr('x2', INNER_WIDTH)
		.attr('y2', 0)
		.classed('grid', true);
}

var updateData = function(data){
	console.log(data);
	d3.select(".linePath").remove();
	var g = d3.select(".group");
	var path = g.append('path').classed("linePath",true);

	var line = d3.line()
		.x(function(d,i) { return _xScale(i+1)})
		.y(function(d) { return _yScale(d)});	

	path.attr('d',line(data));
};


var renderChart = function(data){
		createChart();
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