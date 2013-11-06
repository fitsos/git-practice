function TodoCtrl($scope) {
	$scope.totalTodos = 4;

	$scope.todos = [
		{text: "Learn AngularJS", done: false},
		{text: "Build their Practice App", done: false},
		{text: "Build your own app", done: false},
		{text: "One more thing!", done: true}
	];
}