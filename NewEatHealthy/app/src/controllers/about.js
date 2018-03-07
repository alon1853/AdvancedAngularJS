app.controller("AboutCtrl", function($scope, $rootScope) {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var imageObj = new Image();

    imageObj.onload = function() {
      context.drawImage(imageObj,0 , 0);
    };
    imageObj.src = '../images/Healthy-Mind-in-a-Healthy-Body.jpg';
});