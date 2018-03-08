app.controller("UserStatisticsCtrl", function($scope, $rootScope, httpFactory) {
    $scope.generateUserPostsStatistics = function() {
        var svg = d3.select("#userStatistics"),
            width = +svg.attr("width"),
            height = +svg.attr("height"),
            radius = Math.min(width, height) / 3,
            g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        var color = d3.scaleOrdinal(["#a05d56", "#d0743c", "#ff8c00", "#98abc5", "#8a89a6", "#7b6888", "#6b486b"]);

        var pie = d3.pie()
            .sort(null)
            .value(function(d) { return d.posts; });

        var path = d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);

        var label = d3.arc()
            .outerRadius(radius - 70)
            .innerRadius(radius - 100);

        d3.csv("pie_user_posts.csv", function(d) {
        d.posts = +d.posts;
        return d;
        }, function(error, data) {
        if (error) throw error;

        var arc = g.selectAll(".arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc");

        arc.append("path")
            .attr("d", path)
            .attr("fill", function(d) { return color(d.data.index); });

        arc.append("text")
            .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
            .attr("dy", "0.35em")
            .text(function(d) { return d.data.user + '-' + d.data.posts; });
        });
    };

    $scope.generateGenderPostsStatistics = function() {
        var svg = d3.select("#genderStatistics"),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        radius = Math.min(width, height) / 3,
        g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        var color = d3.scaleOrdinal(["#a05d56", "#d0743c", "#ff8c00", "#98abc5", "#8a89a6", "#7b6888", "#6b486b"]);

        var pie = d3.pie()
            .sort(null)
            .value(function(d) { return d.percent; });

        var path = d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);

        var label = d3.arc()
            .outerRadius(radius - 70)
            .innerRadius(radius - 100);

        d3.csv("pie_gender.csv", function(d) {
        d.percent = +d.percent;
        return d;
        }, function(error, data) {
        if (error) throw error;

        var arc = g.selectAll(".arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc");

        arc.append("path")
            .attr("d", path)
            .attr("fill", function(d) { return color(d.data.index); });

        arc.append("text")
            .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
            .attr("dy", "0.35em")
            .text(function(d) { return d.data.gender + '\n' + d.data.percent + "%"; });
        });
    };

    httpFactory.getRequest("/clients", function(data) {
        $scope.clients = data.data;
        $scope.generateUserPostsStatistics();
        $scope.generateGenderPostsStatistics();
    })
});