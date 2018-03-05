app.factory('httpFactory', function ($http) {
    return {
        getRequest: getRequest,
        putRequest : putRequest
    }

    function getRequest (url) {
      return $http.get(url)
    }

    function putRequest (url, data) {
        return $http.put(url, data)
      }
  });