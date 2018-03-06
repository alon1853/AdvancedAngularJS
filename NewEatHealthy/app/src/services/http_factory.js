app.factory('httpFactory', function ($http) {
    return {
        getRequest: getRequest,
        putRequest : putRequest,
        deleteRequest: deleteRequest
    }

    function getRequest(url, callback) {
      $http.get(url).then(function(data) {
        callback(data);
      });
    }

    function putRequest (url, data) {
        $http.put(url, data);
    }

    function deleteRequest (url) {
        $http.delete(url);
    }
  });