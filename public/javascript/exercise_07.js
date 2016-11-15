var _scale,_svg;

var createChart = function(data){
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


    var path = g.append('path').classed("linePath",true);

    var line = d3.line()
        .x(function(d) { return _xScale(d.x/10)})
        .y(function(d) { return _yScale(d.y/10)});

    path.attr('d',line(data));
}

var data = [{x:0,y:5},{x:1,y:9},{x:2,y:7},{x:3,y:5},{x:4,y:3},{x:6,y:4},{x:7,y:2},{x:8,y:3},{x:9,y:2}]
createChart(data);