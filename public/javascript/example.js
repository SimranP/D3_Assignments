var font_scale = d3.scaleLinear()
    .domain([0,100])
    .range(["italic bold 12px/30px Georgia, serif","italic bold 120px/180px Georgia, serif"]);

var scale = d3.scaleLinear()
<<<<<<< HEAD
    .domain([0,0],[5,5])
    .range([{x:-5,y:0},{x:5,y:-5}])


console.log(scale([0,2]));
=======
    .domain([0,100])
    .range([{x:-5,y:0},{x:5,y:-5}])


console.log(scale(5));
>>>>>>> 9704abb7212338e9b99738110891cbe0d0ab0229
