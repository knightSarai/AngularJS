let knightApp = angular.module('knightApp', ['ngRoute']);

knightApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'KnightController'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'KnightController'
        })
        .otherwise({
            redirectTo: '/home'
        })

}])

knightApp.directive('randomPerson', [() => {
    return {
        restrict: 'E',
        scope: {
            persons: '=',
            title: '='
        },
        templateUrl: 'views/random.html',
        controller: ($scope) => {
            $scope.random = Math.floor(Math.random() * 3);

        }
    };
}])

// knightApp.run(function(){

// });

knightApp.service('appName', function () {
    this.name = 'knight'
})

function knightContFunc($scope, $http, appName) {
    // $scope.appName = appName.name;
    $scope.charachters = 5;
    $scope.removePerson = (person) => {
        $scope.persons = $scope.persons.filter(p => p !== person)
    }
    $scope.addNewPerson = () => {
        const newPerson = {
            name: $scope.newPerson.name,
            money: parseInt($scope.newPerson.money),
            status: $scope.newPerson.status,
            available: true
        }
        $scope.persons = [...$scope.persons, newPerson];
        $scope.newPerson.name = '';
        $scope.newPerson.money = '';
        $scope.newPerson.status = '';
    }
    $http
        .get('data/persons.json')
        .then(res => $scope.persons = res.data)


}

knightApp.controller('KnightController', ['$scope', '$http', 'appName', knightContFunc]);