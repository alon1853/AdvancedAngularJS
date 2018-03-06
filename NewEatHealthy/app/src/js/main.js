const app = angular.module('EatHealthy', ["ngRoute", "ngCookies"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "../views/home.html",
		controller: "HomeCtrl"
    })
	.when("/Login", {
        templateUrl: "../views/login.html",
		controller: "LoginCtrl"
    })
	.when("/Register", {
        templateUrl: "../views/register.html",
		controller: "RegisterCtrl"
    })
    .when("/Posts", {
        templateUrl: "../views/posts/posts.html",
		controller: "PostsCtrl"
    })
    .when("/Posts/Create", {
        templateUrl: "../views/posts/create.html",
		controller: "PostsCtrl"
    })
	.when("/Posts/Edit", {
        templateUrl: "../views/posts/edit.html",
		controller: "PostsCtrl"
    })
	.when("/Posts/Details", {
        templateUrl: "../views/posts/details.html",
		controller: "PostsCtrl"
    })
    .when("/Posts/Delete", {
        templateUrl: "../views/posts/delete.html",
		controller: "PostsCtrl"
    })
	.when("/RecommendedPosts", {
        templateUrl: "../views/RecommendedPosts.html",
		controller: "RecommendedPostsCtrl"
    })
	.when("/Categories", {
        templateUrl: "../views/categories/categories.html",
		controller: "CategoriesCtrl"
    })
    .when("/Categories/Create", {
        templateUrl: "../views/categories/create.html",
		controller: "CategoriesCtrl"
    })
    .when("/Categories/Edit", {
        templateUrl: "../views/categories/edit.html",
		controller: "CategoriesCtrl"
    })
    .when("/Categories/Details", {
        templateUrl: "../views/categories/details.html",
		controller: "CategoriesCtrl"
    })
    .when("/Categories/Delete", {
        templateUrl: "../views/categories/delete.html",
		controller: "CategoriesCtrl"
    })
	.when("/Clients", {
        templateUrl: "../views/clients/clients.html",
		controller: "ClientsCtrl"
    })
    .when("/Clients/Edit", {
        templateUrl: "../views/clients/edit.html",
		controller: "ClientsCtrl"
    })
    .when("/Clients/Details", {
        templateUrl: "../views/clients/details.html",
		controller: "ClientsCtrl"
    })
    .when("/Clients/Delete", {
        templateUrl: "../views/clients/delete.html",
		controller: "ClientsCtrl"
    })
	.when("/Markers", {
        templateUrl: "../views/markers/markers.html",
		controller: "MarkersCtrl"
    })
    .when("/Markers/Create", {
        templateUrl: "../views/markers/create.html",
		controller: "MarkersCtrl"
    })
    .when("/Markers/Edit", {
        templateUrl: "../views/markers/edit.html",
		controller: "MarkersCtrl"
    })
    .when("/Markers/Details", {
        templateUrl: "../views/markers/details.html",
		controller: "MarkersCtrl"
    })
    .when("/Markers/Delete", {
        templateUrl: "../views/markers/delete.html",
		controller: "MarkersCtrl"
    })
    .when("/About", {
        templateUrl: "../views/about.html"
    })
    .when("/Contact", {
        templateUrl: "../views/contact.html"
    })
    .when("/UserStatistics", {
        templateUrl: "../views/user_statistics.html",
		controller: "UserStatisticsCtrl"
    })
    .when("/PostsStatistics", {
        templateUrl: "../views/posts_statistics.html",
		controller: "PostsStatisticsCtrl"
    });
});