var font_scale = d3.scaleLinear()
    .domain([0,100])
    .range(["italic bold 12px/30px Georgia, serif","italic bold 120px/180px Georgia, serif"]);

var scale = d3.scaleLinear()
    .domain([0,100])
    .range([{x:-5,y:0},{x:5,y:-5}])


console.log(scale(5));
