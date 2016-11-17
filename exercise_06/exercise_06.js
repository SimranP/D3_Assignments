const LENGTH = 100
const INT_MARGIN = 3
const PADDING = 50

var createChart = function(){
    var container = d3.select("body").append("div").classed("shapes",true);
    var svg =  container.append("svg")
                        .attr("width",1000)
                        .attr("height",150)
    var shapes = [createLine,
        createCircle,
        createSquare,
        createTriangle];

    shapes.forEach(function(create,position){create(svg,position)})
}

var createLine =  function(svg,position){
    var g =  appendG(svg,position);
        g.append("line")
            .attr("x1",0)
            .attr("y1",LENGTH)
            .attr("x2",LENGTH)
            .attr("y2",0)
            .classed("line",true);
}

var createCircle = function(svg,position){
    var g =  appendG(svg,position);
        g.append("circle")
            .attr("cx",LENGTH/2+INT_MARGIN)
            .attr("cy",LENGTH/2+INT_MARGIN)
            .attr("r",LENGTH/2)
            .classed("circle",true)
}

var createSquare = function(svg,position){
    var g =  appendG(svg,position);
        g.append("rect")
            .attr("width",LENGTH)
            .attr("height",LENGTH)
            .attr("x",INT_MARGIN)
            .attr("y",INT_MARGIN)
            .classed("square",true);
}

var createTriangle = function(svg,position){
    var g =  appendG(svg,position);
        g.append("polygon")
            .attr("points",0+" "+ LENGTH+","+LENGTH/2+" "+0+","+ LENGTH +" "+ LENGTH)
            .classed("triangle",true);
}



var appendG = function(svg,position){
    var g =  svg.append("g").classed("shape",true)
                .attr("transform","translate("+((LENGTH*position) + (PADDING*position))+", "+ 0 +")")
    return g;
}




createChart();