var app = angular.module('myApp', [])
	app.controller('diceController', ['$scope', function($scope){
	
	$scope.playerTotal = 100
	$scope.board = [1,2,3,4,5,6,7,8,9,10,11,12]

	$scope.die1
	$scope.die2
	$scope.winings


	$scope.diceRoll = function(){
		$scope.die1 = Math.floor((Math.random()*6)+1) 
		$scope.die2 = Math.floor((Math.random()*6)+1) 
		var total =  $scope.die1 + $scope.die2
		$scope.total = total
		comeOutRoll()
	}
	


	$scope.passLine = function(){
		var ask = prompt('bet amount?')
		$scope.amount = ask
		$scope.playerTotal -= $scope.amount
		console.log('bet placed on pass')
	}

	function comeOutRoll(){
		if($scope.total === 7 || $scope.total === 11) {
			$scope.winings = $scope.amount*2
			$scope.playerTotal += $scope.winings
			$scope.outCome = "you Won " +$scope.winings
		} else if($scope.total === 2 || $scope.total === 3 || $scope.total === 12){
			$scope.outCome = "you lost"
		}
	}


}])