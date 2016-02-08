var app = angular.module('myApp', [])
	app.controller('diceController', ['$scope', function($scope){
	
	$scope.playerTotal = 100

	$scope.die1
	$scope.die2
	$scope.winings = 0
	$scope.outCome

//main go function when dice rolls
	$scope.diceRoll = function(){
		$scope.die1 = Math.floor((Math.random()*6)+1) 
		$scope.die2 = Math.floor((Math.random()*6)+1) 
		var total =  $scope.die1 + $scope.die2
		$scope.total = total
		if($scope.passAmount > 0){
			passLineRoll()
		}
		if($scope.dontPassAmount > 0) {
			dontPassLineRoll()
		}
		if($scope.fieldAmount > 0) {
			field()
		}
		$scope.passAmount = 0
		$scope.dontPassAmount = 0
		$scope.fieldAmount = 0
	}
	


	$scope.passLine = function(){
		var ask = prompt('bet amount?')
		$scope.passAmount = ask
		$scope.playerTotal -= $scope.passAmount
		console.log('bet placed on pass')
	}
	$scope.dontPass = function(){
		var ask = prompt('bet amount?')
		$scope.dontPassAmount = ask
		$scope.playerTotal -= $scope.dontPassAmount
		console.log('bet placed on dont pass')
	}
	$scope.field = function(){
		$scope.fieldInput = true
		$scope.playerTotal -= $scope.fieldAmount
		console.log('bet placed on field')
	}
//--------------- calc odds and payout functions -------------------
	function passLineRoll(){
		if($scope.total === 7 || $scope.total === 11) {
			$scope.winings += $scope.passAmount*2
			$scope.playerTotal += $scope.winings
			$scope.outCome = "you Won " +$scope.winings
		} else if($scope.total === 2 || $scope.total === 3 || $scope.total === 12){
			$scope.winings = 0
			$scope.outCome = "you lost"
		}
	}

	function dontPassLineRoll(){
		if($scope.total === 2 || $scope.total === 3){
			$scope.winings += $scope.dontPassAmount*2
			$scope.playerTotal += $scope.winings
			$scope.outCome = 'you won '+ $scope.winings+ ' on dont pass'
		} else if($scope.total === 12){
			$scope.outCome = 'push'
		} else {
			$scope.winings = 0
			$scope.outCome = 'you lost'
		}
	}

	function field(){
		if($scope.total === 3 || $scope.total === 4 || $scope.total === 9 || $scope.total === 10){
			console.log('wining field')
			$scope.winings += $scope.fieldAmount*2
			$scope.playerTotal += $scope.winings
			$scope.outCome = 'you won '+ $scope.winings+ ' on field'
		} else if($scope.total === 2 || $scope.total === 12) {
			$scope.winings += $scope.fieldAmount*3
			$scope.playerTotal += $scope.winings
			$scope.outCome = 'you won '+ $scope.winings+ ' on field special'
		} else {
			$scope.winings = 0
			$scope.outCome = 'you lost on field'
		}

	}


}])