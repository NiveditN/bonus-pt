
// Object Filter: Passed in ng-repeat syntax.
// Filters the child objects of a parent object by a given key-value pair.

angular.module('bonuspoint').filter('objectFilter', function () {
	return function (input, filterKey, filterVal) {
		var filteredInput = {};
		angular.forEach(input, function(value, key) {
			if(value.hasOwnProperty(filterKey) && value[filterKey] === filterVal) {
				console.log('Match found!')
				filteredInput[key] = value;
			}
		});
		return filteredInput;
	}
});