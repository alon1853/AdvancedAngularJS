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
        templateUrl: "../content/posts/posts.html",
		controller: "PostsCtrl"
    })
    .when("/Posts/Create", {
        templateUrl: "../content/posts/create.html",
		controller: "PostsCreateCtrl"
    })
	.when("/Posts/Edit", {
        templateUrl: "../content/posts/edit.html",
		controller: "PostsEditCtrl"
    })
	.when("/Posts/Details", {
        templateUrl: "../content/posts/details.html",
		controller: "PostsDetailsCtrl"
    })
    .when("/Posts/Delete", {
        templateUrl: "../content/posts/delete.html",
		controller: "PostsDeleteCtrl"
    })
	.when("/RecommendedPosts", {
        templateUrl: "../content/RecommendedPosts.html",
		controller: "RecommendedPostsCtrl"
    })
	.when("/Categories", {
        templateUrl: "../content/categories/categories.html",
		controller: "CategoriesCtrl"
    })
    .when("/Categories/Create", {
        templateUrl: "../content/categories/create.html",
		controller: "CategoriesCtrl"
    })
    .when("/Categories/Edit", {
        templateUrl: "../content/categories/edit.html",
		controller: "CategoriesCtrl"
    })
    .when("/Categories/Details", {
        templateUrl: "../content/categories/details.html",
		controller: "CategoriesCtrl"
    })
    .when("/Categories/Delete", {
        templateUrl: "../content/categories/delete.html",
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