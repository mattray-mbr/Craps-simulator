var app = angular.module('myApp', [])
	app.controller('diceController', ['$scope', function($scope){
	
	playertotal = 100
	$scope.board = [1,2,3,4,5,,6,7,8,9,10,11,]
	var bet
	var roll



	$scope.diceRoll = function(){
		var die1 = Math.floor((Math.random()*6)+1) 
		var die2 = Math.floor((Math.random()*6)+1) 
		console.log(die1 + " " + die2)
		var total =  die1 + die2
		console.log(total)
		return total
	}
	roll=$scope.diceRoll()


	$scope.bet = function(index){
		console.log('bet placed on '+(index+1))
		return index+1
	}

	bet = $scope.bet()
	console.log(bet)

}])




