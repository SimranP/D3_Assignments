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

	var g = _svg.append('g')
                    .attr('transform', 'translate('+(MARGIN.right) +', '+ MARGIN.left +')')
                    .classed("group",true);

    createArea(data,g,curveFunction);
	generateAxis(_svg,_xScale,_yScale);

	var cg = _svg.append('g')
                            .attr('transform', 'translate('+(MARGIN.right) +', '+ MARGIN.left +')')
                            .classed("group",true);
	appendCircles(cg,data);
}

var createArea = function(data,g,curveFunction){
    var area = d3.area()
                 .x(function(d) { return _xScale(d/10); })
                 .y0(INNER_HEIGHT)
                 .y1(function(d) { return _yScale(formula(d)/10); })
                 .curve(curveFunction);

    var path = g.append("path")
                .datum(data)
                   .attr("d",area)
                    .classed("area",true);

    var path = g.append('path').classed("linePath",true);
        var line = d3.line()
                    .x(function(d) { return _xScale(d/10)})
                    .y(function(d) { return _yScale(formula(d)/10)})
                    .curve(curveFunction);


    path.attr('d',line(data));
}

var appendCircles = function(g,data){
    g.selectAll('circle').data(data)
                .enter()
                .append('circle')
                    .classed('dot',true)
                    .attr('r', 4)
                    .attr('cx', function(d){return _xScale(d/10)})
                    .attr('cy', function(d){return _yScale(formula(d)/10)});

}

var formula = function(x){
    return (3 * Math.sin(x))+5;
}