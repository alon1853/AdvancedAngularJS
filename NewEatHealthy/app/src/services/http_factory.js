app.factory('httpFactory', function ($http) {
    return {
        getRequest: getRequest,
        putRequest : putRequest,
        postRequest: postRequest,
        deleteRequest: deleteRequest
    }

    function getRequest(url, callback) {
      $http.get(url).then(function(data) {
          callback(data);
      });
    }

    function postRequest(url, data, callback) {
        $http.post(url, data).then(function(data) {
            callback(data);
        });

        return false;
    }

    function putRequest (url, data, callback) {
        $http.put(url, data).then(function(data) {
            callback(data);
        });
    }

    function deleteRequest (url) {
        $http.delete(url);
    }
  });