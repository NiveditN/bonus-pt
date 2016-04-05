angular.module('bonuspoint').directive('cardModel', function() {
	return {
		restrict: 'E',
		scope: {
			'model': '='
		},		
		templateUrl: 'client/directives/cardModel/cardModel.html',
		controller: ['$scope', function($scope) {
			// controller logic here
		}],
	}
});