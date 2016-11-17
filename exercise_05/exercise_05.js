var createChart = function(values){
    var container =  d3.select("body").append("div").classed("boxes",true);

    var font_scale = d3.scaleLinear()
        .domain([0,10])
        .range(['italic bold 12px/30px Georgia, serif','italic bold 120px/180px Georgia, serif']);

    var divs = container
        .selectAll("div")
        .data(values);

    divs.enter()
        .append("div")
        .classed("box",true)
        .text(function(d){return d})
        .style("font",function(d){return font_scale(d)})
        .style("float","left");
};

createChart([0,1,2,3,4,5,6,7,8,9,10]);
