var createChartTable = function(values,scales){
    var container = d3.select('body').append("div").classed("container",true);

    scales.forEach(function(scale){
        var row = container.append("div").classed("row",true);

        row.append("div")
           .classed("value",true)
           .text(function(d){return scale.name});

        row.selectAll("value")
            .data(values)
            .enter()
            .append("div")
            .classed("value",true)
            .text(function(d){return scale.measure(d)});
    });
};

var n_square      =     {name:"n square"      ,measure:d3.scalePow().exponent(2)};
var log_n         =     {name:"log(n)"        ,measure:function(d){return d3.scaleLog()(d).toFixed(4)}};
var n             =     {name:"n"             ,measure:function(d){return d}};
var title         =     {name:"title"         ,measure:function(d){return d}};
var log_n_rounded =     {name:"log(n) rounded",measure:function(d){return Math.round(d3.scaleLog()(d))}};

var scales = [title,n,n_square,log_n,log_n_rounded];

createChartTable([1,2,3,4,5,6,7,8,9,10],scales);