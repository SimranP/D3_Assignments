var data = d3.range(1,11);
var _line,_xScale,_yScale;

var createChart = function(values){
    var svg = d3.select('.container').append('svg')
    			.attr('width',WIDTH)
    			.attr('height',HEIGHT);

    _xScale = d3.scaleOrdinal()
                   .domain(values.map(function(d){return d.name}))
                   .range(d3.range(0,INNER_WIDTH,100))

    _yScale = d3.scaleLinear()
                   .domain([0,d3.max(values,function(d){ return d.value; })])
                   .range([INNER_HEIGHT,0]);

    _line = d3.line()
                 .x(function(d){ return _xScale(d.name)} )
                 .y(function(d){ return _yScale(d.value)} );

    var g = svg.append('g')
                .attr('transform', 'translate('+(MARGIN.right) +', '+ MARGIN.left +')')
                .classed("group",true);

    var path = g.append('path')
                  .attr('d',_line(values))
                  .classed("line",true);


    g.selectAll('circle').data(values,function(d,i){return d.value;})
        		.enter()
        		.append('circle')
        		    .classed('dot',true)
                    .attr('r', 4)
                    .attr('cx', function(d){return _xScale(d.name)})
                    .attr('cy', function(d){return _yScale(d.value)})
                    .append("title")
                        .text(function(d){return d.name+":"+d.value});

    generateAxis(svg,_xScale,_yScale,{x:10,y:40});
    subTicks(5);
};


var updateChart = function(values){
    d3.selectAll("path.line")
      .attr('d',_line(values));

    var dots = d3.selectAll("circle.dot")
        .data(values);

    dots.attr('cy', function(d){return _yScale(d.value)})
        .append("title")
            .text(function(d){return d.name+":"+d.value});
};

var updateScales =  function(values){
    _yScale = d3.scaleLinear()
                   .domain([0,d3.max(values,function(d){ return d.value; })])
                   .range([INNER_HEIGHT,0]);
};

var applyFunctions = function(data,value){
    return [
                     {name:"min",value: d3.min(data)},
                     {name:"max",value: d3.max(data)},
                     {name:"extent",value: d3.extent(data)[0]},
                     {name:"mean",value: d3.mean(data)},
                     {name:"median",value: d3.median(data)},
                     {name:"sum",value: d3.sum(data)},
                     {name:"quantile",value: d3.quantile(data,value)},
                     {name:"variance",value: d3.variance(data)},
                     {name:"deviation",value: d3.deviation(data)}
           ];
}

createChart(applyFunctions(data,0.5));

window.onload = function(){
    var input = document.querySelector(".quantile");
    input.onchange = function(e){
        updateChart(applyFunctions(data,this.value));
    };

    var newData = document.querySelector(".data");
    newData.onchange = function(e){
        var data = this.value.split(" ");
        updateScales(applyFunctions(data,0.5));
        updateChart(applyFunctions(data,0.5));
    };
}
