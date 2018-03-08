app.controller("PostsStatisticsCtrl", function($scope, $rootScope, httpFactory) {	
    $scope.generateUserStatistics = function() {
        var svg = d3.select("svg"),
            margin = {top: 20, right: 10, bottom: 30, left: 80},
            width = +svg.attr("width") - margin.left - margin.right,
            height = +svg.attr("height") - margin.top - margin.bottom;

        var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
            y = d3.scaleLinear().rangeRound([height, 0]);

        var g = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        d3.json($scope.posts, function(d) {
        d.count = +d.count;
        return d;
        }, function(error, data) {
        if (error) throw error;

        x.domain(data.map(function(d) { return d._id; }));
        y.domain([0, d3.max(data, function(d) { return d.count; })]);

        g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));
        
        g.append("g")
            .attr("class", "axis axis--y")
            .call(d3.axisLeft(y).ticks(15))
        
        g.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return x(d._id); })
            .attr("y", function(d) { return y(d.count); })
            .attr("width", x.bandwidth())
            .attr("height", function(d) { return height - y(d.count); });
        });
    };
    
    httpFactory.getRequest("/groupGender", function(data) {
        $scope.posts = data.data;
        $scope.generateUserStatistics();
    })

});