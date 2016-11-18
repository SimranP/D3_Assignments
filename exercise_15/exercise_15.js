var _scale,_svg;
RADIUS = Math.min(WIDTH, HEIGHT) / 2;

var createChart = function(data){
	var width = 900,
        height = 460,
        radius = Math.min(width, height) / 2;

    var color = d3.scaleOrdinal().range(d3.schemeCategory20);


    var arc = d3.arc()
        .outerRadius(radius)
        .innerRadius(0)
        .startAngle(function(d){return d.startAngle/2;})
        .endAngle(function(d){return d.endAngle/2;});


    var pie = d3.pie()
        .sort(null)
        .value(function(d) { return d; });

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g = svg.selectAll(".arc")
          .data(pie(data))
        .enter().append("g")
          .attr("class", "arc");

      g.append("path")
          .attr("d", arc)
          .style("fill", function(d,i) { return color(i); });
    }
