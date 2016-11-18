var _scale,_svg;

var createChart = function(data,tension){
    _xScale = d3.scaleLinear()
        .domain([0,10])
        .range([0,INNER_WIDTH]);

    _yScale = d3.scaleLinear()
        .domain([0.0,1.0])
        .range([INNER_HEIGHT,0]);

    _svg = d3.select('body').append('svg')
			.attr('width',WIDTH)
			.attr('height',HEIGHT);

	generateAxis(_svg,_xScale,_yScale);

    var sg = _svg.append('g')
            .attr('transform', 'translate('+(MARGIN.right) +', '+ MARGIN.left +')')
            .classed("group",true);

    createSinLine(data,sg,tension);
}

var createSinLine = function(data,g,tension){
    var path = g.append('path').classed("linePath",true);
    var line = d3.line()
                .x(function(d) { return _xScale(d)})
                .y(function(d) { return _yScale(formula(d))})
                .curve(d3.curveCardinal.tension(tension));

    path.attr('d',line(data));


    g.selectAll('circle').data(data)
    		.enter()
    		.append('circle')
    		    .classed('dot',true)
                .attr('r', 4)
                .attr('cx', function(d){return _xScale(d)})
                .attr('cy', function(d){return _yScale(formula(d))});
}

var formula = function(x){
    return (Math.sin(3*x)+1)/2;
}