const LENGTH = 100
const INT_MARGIN = 3

var createChart = function(){
    var container = d3.select("body").append("div").classed("shapes",true);
    createLine(container);
    createCircle(container);
    createSquare(container);
    createTriangle(container);
}

var createLine =  function(container){
    var svg =  appendSVG(container);
        svg.append("line")
            .attr("x1",0)
            .attr("y1",LENGTH)
            .attr("x2",LENGTH)
            .attr("y2",0)
            .classed("line",true);
}

var createCircle = function(container){
    var svg =  appendSVG(container);
    svg.append("circle")
        .attr("cx",LENGTH/2+INT_MARGIN)
        .attr("cy",LENGTH/2+INT_MARGIN)
        .attr("r",LENGTH/2)
        .classed("circle",true)
}

var createSquare = function(container){
    var svg =  appendSVG(container);
        svg.append("rect")
            .attr("width",LENGTH)
            .attr("height",LENGTH)
            .attr("x",INT_MARGIN)
            .attr("y",INT_MARGIN)
            .classed("square",true);
}

var createTriangle = function(container){
    var svg =  appendSVG(container);
        svg.append("polygon")
            .attr("points",0+" "+ LENGTH+","+LENGTH/2+" "+0+","+ LENGTH +" "+ LENGTH)
            .classed("triangle",true);
}



var appendSVG = function(container){
    var svg =  container.append("div").classed("shape",true)
                            .append("svg")
                            .attr("width",LENGTH + 10)
                            .attr("height",LENGTH + 10 );

    return svg;
}




createChart();