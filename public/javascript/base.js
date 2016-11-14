const HEIGHT = 640;
const WIDTH = 1000;
const MARGIN = {top: 50, bottom:50, left: 50, right:70}
const INNER_HEIGHT = HEIGHT - MARGIN.top - MARGIN.bottom
const INNER_WIDTH = WIDTH - MARGIN.left - MARGIN.right

var randInt = function(limit){
	return Math.floor(Math.random() * limit);
}

var uniq = function(array){
    var uniq_array = {}
    array.forEach(function(value){
        uniq_array[value] = value;
    });
    return Object.keys(uniq_array).map(function(k){return uniq_array[k]});
};

var random_nums = function(num,limit) {
	var array = [];
	for (var i = 1; i <= num; i++){ array.push(randInt(limit)); }
	return array;
};

var generateAxis =  function(_svg,_xScale,_yScale){
	var xAxis = d3.axisBottom(_xScale).ticks(10);

	var yAxis = d3.axisLeft(_yScale).ticks(10);

	_svg.append('g')
		.attr('transform', 'translate('+MARGIN.right+', '+(HEIGHT - MARGIN.top)+')')
		.call(xAxis)
		.classed('xAxis',true);

	_svg.append('g')
		.attr('transform', 'translate('+(MARGIN.left)+', '+ MARGIN.left +')')
		.call(yAxis)
		.classed('yAxis',true);

	d3.selectAll('.yAxis .tick')
		.append('line')
			.attr('x1',0)
			.attr('y1',0)
			.attr('x2',0)
			.attr('y2',INNER_WIDTH);

	d3.selectAll('.xAxis .tick')
		.append('line')
			.attr('x1',0)
			.attr('y1',0)
			.attr('x2',0)
			.attr('y2',INNER_HEIGHT);
};




var students_data = function(){
	return [
	{name:'ramesh',subject:'maths',score:87},
	{name:'suresh',subject:'maths',score:45},
	{name:'pokemon',subject:'english',score:65},
	{name:'mary',subject:'kannada',score:44},
	{name:'riya',subject:'science',score:72},
	{name:'katie',subject:'social studies',score:82},
	{name:'katie',subject:'maths',score:98},
	{name:'ramesh',subject:'bengali',score:25},
	{name:'suresh',subject:'science',score:55},
	{name:'riya',subject:'tamil',score:75},
	{name:'pokemon',subject:'sports',score:95},
	{name:'pokemon',subject:'social studies',score:32}
	];
}