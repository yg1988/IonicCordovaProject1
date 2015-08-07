
angular.module('Storage', [ ]).factory('storage', 
    ['$window', function ($window) {
        var LOCAL_STORAGE_KEY = 'tigerPlayers';
        return {
            loadFromStorage: function () {
                return angular.fromJson($window.localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
            },
            saveToStorage: function (items) {
                $window.localStorage.setItem(LOCAL_STORAGE_KEY, angular.toJson(items));
            }
        }
    }]);