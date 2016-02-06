var app = angular.module('myApp', [])
	app.controller('diceController', ['$scope', function($scope){
	
	$scope.playerTotal = 100
	$scope.board = [1,2,3,4,5,6,7,8,9,10,11,12]



	$scope.diceRoll = function(){
		var die1 = Math.floor((Math.random()*6)+1) 
		var die2 = Math.floor((Math.random()*6)+1) 
		console.log(die1 + " " + die2)//bind this to dom
		$scope.dice = (die1 + " " + die2)
		var total =  die1 + die2
		console.log(total) //bind this to dom
		$scope.total = total
		checkStatus()
	}
	


	$scope.bet = function(index){
		var ask = prompt('bet amount?')
		$scope.amount = ask
		console.log('bet placed on '+(index+1))
		$scope.playerBet = index+1 
	}

	function checkStatus(){
		if($scope.playerBet === $scope.total) {
			$scope.winings = $scope.amount*2
			$scope.playerTotal += $scope.winings
			$scope.winner = "you Won"
		} else {
			$scope.winner = "you lost"
			$scope.winings = $scope.amount
			$scope.playerTotal -= $scope.winings
		}
	}


}])




