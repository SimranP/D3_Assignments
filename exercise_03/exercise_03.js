var students_data = students_data();
var subjects = uniq(students_data.map(function(d){return d.subject}));

var color_scale = function(subject){
  var scale = d3.scaleOrdinal().domain(subjects).range(d3.schemeCategory10);
  return scale(subject);
};

var createChart = function(length){
	var container = d3.select('body').append('div').classed("container",true);
}

var updateChart = function(data){
    var bars = d3.select(".container").selectAll("div").data(data);

        bars.enter()
            .append("div")
            .classed("round_corner",true)
            .style("width",function(d){
                return (d.score*5)+"px"; })
            .style("background-color",function(d){
                return color_scale(d.subject);
            })
            .text(function(d){return d.name + " " +d.score});
};

 var sort_by = function(field){
         var subjects = d3.selectAll(".container div").sort(function(a,b){
              if (a[field] < b[field]){
                 return -1;
              }else if (a[field] > b[field]){
                return  1;
              }else{
                return 0;
              }
         });
 };

 var addSubjectsList = function(){
        var subjects_list = d3.select('body').append('div').classed("subjects",true);
        subjects_list.selectAll('div').data(subjects)
                     .enter()
                     .append('div')
                     .classed("subject",true)
                     .style("background-color",function(d){
                         return color_scale(d);
                     })
                     .text(function(d){return d});
 };

var renderChart = function(data){
    createChart(data.length);
    updateChart(data);
};

renderChart(students_data);
addSubjectsList();