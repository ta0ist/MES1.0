angular.module('login', []).controller('loginCtrl', function($scope, $http) {

    $scope.user = {
        Name: "",
        Password: ""

    }

    $scope.checkuser = function() {

        $http.post('/checkuser', { userName: $scope.user.Name, password: $scope.user.Password }).success(function(data) {
            if (data.Status = 0) {
                window.location = '/';
            } else {
                alert("无法登陆")
            }
        })



    }



})