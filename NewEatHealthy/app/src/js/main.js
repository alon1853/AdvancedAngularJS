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
    .when("/Posts", {
        templateUrl: "../content/posts.html",
		controller: "PostsCtrl"
    })
    .when("/About", {
        templateUrl: "../content/about.html"
    })
    .when("/Contact", {
        templateUrl: "../content/contact.html"
    });
});