const app = angular.module('EatHealthy', ["ngRoute", "ngCookies"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "../content/home.html",
		controller: "HomeCtrl"
    })
	.when("/Login", {
        templateUrl: "../content/login.html",
		controller: "LoginCtrl"
    })
	.when("/Register", {
        templateUrl: "../content/register.html",
		controller: "RegisterCtrl"
    })
    .when("/Posts", {
        templateUrl: "../content/posts.html",
		controller: "PostsCtrl"
    })
	.when("/RecommendedPosts", {
        templateUrl: "../content/RecommendedPosts.html",
		controller: "RecommendedPostsCtrl"
    })
	.when("/Categories", {
        templateUrl: "../content/Categories.html",
		controller: "CategoriesCtrl"
    })
	.when("/Clients", {
        templateUrl: "../content/Clients.html",
		controller: "ClientsCtrl"
    })
	.when("/Markers", {
        templateUrl: "../content/Markers.html",
		controller: "MarkersCtrl"
    })
    .when("/About", {
        templateUrl: "../content/about.html"
    })
    .when("/Contact", {
        templateUrl: "../content/contact.html"
    })
    .when("/UserStatistics", {
        templateUrl: "../content/user_statistics.html",
		controller: "UserStatisticsCtrl"
    })
    .when("/PostsStatistics", {
        templateUrl: "../content/posts_statistics.html",
		controller: "PostsStatisticsCtrl"
    });
});