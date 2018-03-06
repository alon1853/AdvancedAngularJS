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
		controller: "PostsCreateCtrl"
    })
	.when("/Posts/Edit", {
        templateUrl: "../views/posts/edit.html",
		controller: "PostsEditCtrl"
    })
	.when("/Posts/Details", {
        templateUrl: "../views/posts/details.html",
		controller: "PostsDetailsCtrl"
    })
    .when("/Posts/Delete", {
        templateUrl: "../views/posts/delete.html",
		controller: "PostsDeleteCtrl"
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
        templateUrl: "../views/Clients.html",
		controller: "ClientsCtrl"
    })
	.when("/Markers", {
        templateUrl: "../views/Markers.html",
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