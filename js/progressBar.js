angular.module('progressBar', ['ui.bootstrap']);
var ProgressDemoCtrl = function ($scope) {
	$scope.selectedProgressBar = 1;
  $scope.data = {"buttons":[39,31,-21,-20], "bars":[21,71,75,18], "limit":200};

  $scope.progress = function(val) { 
		$scope.barIndex = $scope.selectedProgressBar - 1;
		$scope.data.bars[$scope.barIndex] = $scope.data.bars[$scope.barIndex] + val;
		if($scope.data.bars[$scope.barIndex] < 0) {
			$scope.data.bars[$scope.barIndex] = 0;
		}
  };
};