let knightApp = angular.module('knightApp', ['ngRoute']);

knightApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'KnightController'
        })
        .otherwise({
            redirectTo: '/home'
        })

}])

// knightApp.config();

// knightApp.run(function(){

// });

function knightContFunc($scope) {
    $scope.message = "knight";
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
    $scope.persons = [
        {
            name: 'knight',
            money: 500,
            status: 'in relation two ways',
            available: true
        },
        {
            name: 'sarah',
            money: 350,
            status: 'in relation on way',
            available: true
        },
        {
            name: 'ward',
            money: 0,
            status: 'in relation one way',
            available: false
        }
    ]
}

knightApp.controller('KnightController', ['$scope', knightContFunc]);