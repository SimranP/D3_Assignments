var _scale,_svg;

var createChart = function(data,curveFunction){
    _xScale = d3.scaleLinear()
        .domain([0.0,1.0])
        .range([0,INNER_WIDTH]);

    _yScale = d3.scaleLinear()
        .domain([0.0,1.0])
        .range([INNER_HEIGHT,0]);

    _svg = d3.select('body').append('svg')
			.attr('width',WIDTH)
			.attr('height',HEIGHT);

	generateAxis(_svg,_xScale,_yScale);

    var g = _svg.append('g')
            .attr('transform', 'translate('+(MARGIN.right) +', '+ MARGIN.left +')')
            .classed("group",true);

    var sg = _svg.append('g')
            .attr('transform', 'translate('+(MARGIN.right) +', '+ MARGIN.left +')')
            .classed("group",true);

    createLine(data,g,curveFunction);
    createSinLine(data,sg,curveFunction);
}

var createLine = function(data,g,curveFunction){
    var interpolate = d3.interpolate(10,20);

    var path = g.append('path').classed("linePath",true);

    var line = d3.line()
                .x(function(d) { return _xScale(d.x/10)})
                .y(function(d) { return _yScale(d.y/10)})
                .curve(curveFunction);

    path.attr('d',line(data));


    g.selectAll('circle').data(data)
    		.enter()
    		.append('circle')
    		    .classed('dot',true)
                .attr('r', 4)
                .attr('cx', function(d){return _xScale(d.x/10)})
                .attr('cy', function(d){return _yScale(d.y/10)});
}

var createSinLine = function(data,g,curveFunction){
    var path = g.append('path').classed("sinlinePath",true);
    var line = d3.line()
                .x(function(d) { return _xScale(d.x/10)})
                .y(function(d) { return _yScale((Math.sin(d.x)+5)/10)})
                .curve(curveFunction);;

    path.attr('d',line(data));


    g.selectAll('circle').data(data)
    		.enter()
    		.append('circle')
    		    .classed('dot',true)
                .attr('r', 4)
                .attr('cx', function(d){return _xScale(d.x/10)})
                .attr('cy', function(d){return _yScale((Math.sin(d.x)+5)/10)});
}