var app = angular.module('myApp', [])
	app.controller('diceController', ['$scope', function($scope){
	
	$scope.playerTotal = 100

	$scope.die1
	$scope.die2
	$scope.winings = 0
	$scope.outCome
	$scope.point = ''
	$scope.comePoint = ''
	$scope.comeout = true
	$scope.pointSet = false
	$scope.comeAmount = ''
	$scope.comeNumber = ''
	$scope.Fwinings = 0
	$scope.Pwinings = 0
	$scope.DPwinings = 0
	$scope.totalWinings
	$scope.valid = "valid"
 	$scope.invalid = "invalid"

 	function gameState(){
 		if($scope.point !== ''){
 			$scope.comeout = false
 			$scope.pointSet = true
 			$scope.valid = "invalid"
 			$scope.invalid = "valid"
 		} else {
 			$scope.comeout = true
 			$scope.pointSet = false
 			$scope.valid = "valid"
 			$scope.invalid = "invalid"
 		}
 	}



//main go function when dice rolls
	$scope.diceRoll = function(){
		//calc all bets
		//spit out bet total

		$scope.die1 = Math.floor((Math.random()*6)+1) 
		$scope.die2 = Math.floor((Math.random()*6)+1) 
		var total =  $scope.die1 + $scope.die2
		$scope.total = total
		//rolls
		passLineRoll()
		dontPassLineRoll()
		field()
		come()
		point()
		gameState() //switch game state if point is set
		addWinings()
	}
	


	$scope.passLine = function(){
		$scope.passAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.passAmount
		console.log('bet placed on pass')
	}
	$scope.dontPass = function(){
		$scope.dontPassAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.dontPassAmount
		// console.log('bet placed on dont pass')
	}
	$scope.field = function(){
		$scope.fieldAmount = prompt('bet')
		$scope.playerTotal -= $scope.fieldAmount
		console.log('bet placed on field')
	}
	$scope.comeBet = function(){
		//set next roll to the come bet number
		$scope.comeAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.comeAmount
		console.log('bet placed on come')
	}
//--------------- calc odds and payout functions -------------------
	function passLineRoll(){
		if($scope.passAmount > 0){
			console.log('pass running')
			if($scope.total === 7 || $scope.total === 11) {
				$scope.Pwinings = $scope.passAmount*2
				$scope.outCome = "you Won " +$scope.Pwinings
				$scope.passAmount = ''
			} else if($scope.total === 2 || $scope.total === 3 || $scope.total === 12){
				$scope.Pwinings = 0
				$scope.outCome = "you lost"
				$scope.passAmount = ''
			} else {
				console.log('point established')
				$scope.Pwinings = 0
				//hold value for game state part 2
				//new function for checking if total is point or 7
			}
		}
	}
	function dontPassLineRoll(){
		if($scope.dontPassAmount > 0) {
			console.log('dont pass running')
			if($scope.total === 2 || $scope.total === 3){
				$scope.DPwinings = $scope.dontPassAmount*2
				$scope.outCome = 'you won '+ $scope.DPwinings+ ' on dont pass'
				$scope.dontPassAmount = ''
			} else if($scope.total === 12){
				$scope.outCome = 'push'
				$scope.playerTotal += $scope.dontPassAmount
				$scope.dontPassAmount = ''
			} else if($scope.total === 7 || $scope.total === 11){
				$scope.DPwinings = 0
				$scope.outCome = 'you lost '+ $scope.dontPassAmount+'on dont pass'
				$scope.dontPassAmount = ''
			} else {
				$scope.DPwinings=0
				//hold value for game state part 2
			}
		}
	}
	function field(){
		console.log('field running')
		if($scope.fieldAmount > 0) {
			if($scope.total === 3 || $scope.total === 4 || $scope.total === 9 || $scope.total === 10){
				$scope.Fwinings = $scope.fieldAmount*2
				$scope.outCome = 'you won '+ $scope.Fwinings+ ' on field'
				$scope.fieldAmount = ''
				console.log($scope.Fwinings + 'field winings')
			} else if($scope.total === 2 || $scope.total === 12) {
				$scope.Fwinings = $scope.fieldAmount*3
				$scope.outCome = 'you won '+ $scope.Fwinings+ ' on field special'
				$scope.fieldAmount = ''
				console.log($scope.eFwinings + 'field winings')
			} else {
				$scope.Fwinings = 0
				$scope.outCome = 'you lost on field'
				$scope.fieldAmount = ''
			}
		}
	}
	function come(){
		if($scope.comePoint !== ''){
			if($scope.comePoint === $scope.total){
				$scope.winings += $scope.comeNumber*2
				$scope.playerTotal += $scope.winings
				$scope.outCome = 'you won come bet on '+ $scope.total
				$scope.comeNumber = ''
				$scope.comePoint = ''
			} else if($scope.total === 7){
				$scope.comeNumber = ''
				$scope.comePoint = ''
				$scope.outCome = 'you lost come bet'
			}
		}
	}
	function comeStart(){
		if($scope.total === 7 || $scope.total === 11) {
			$scope.winings += $scope.comeAmount*2
			$scope.playerTotal += $scope.winings
			$scope.outCome = "you Won " +$scope.winings
		} else if($scope.total === 2 || $scope.total === 3 || $scope.total === 12){
			$scope.winings = 0
			$scope.outCome = "you lost"
		} else {
			console.log('not working yet')
			$scope.comePoint = $scope.total
			$scope.comeNumber = $scope.comeAmount
			//hold value for game state part 2
		}
	}
	function addWinings() {
		$scope.totalWinings = $scope.Fwinings + $scope.Pwinings + $scope.DPwinings
		console.log('Fwinings '+$scope.Fwinings)
		console.log('Pwinings '+$scope.Pwinings)
		console.log('DPwinings '+$scope.DPwinings)
		console.log('totalWinings '+$scope.totalWinings)

		$scope.playerTotal += $scope.totalWinings
		$scope.totalWinings = 0
		$scope.Fwinings = 0
		$scope.Pwinings = 0
		$scope.DPwinings = 0
	}
	function point(){
		if($scope.point === ''){
			if($scope.total === 4 || $scope.total === 5 || $scope.total === 6 || $scope.total === 8 || $scope.total === 9 || $scope.total === 10){
				$scope.point = $scope.total
			}
		} else if ($scope.point === $scope.total){
			$scope.point = ''
			console.log('point reached')
			if($scope.passAmount > 0){
				$scope.winings += $scope.passAmount*2
				$scope.playerTotal += $scope.winings
				$scope.outCome = "you Won pass line from point"
			}
			//payout winners
			//point is rolled
		} else if($scope.total === 7){
			$scope.point = ''
			//7 out, game reset
			console.log('7 out')
		}

		//come bet stuff
		if($scope.comeAmount !== ''){
			comeStart()
			console.log('comestart')
			$scope.comeAmount = ''
		}
		$scope.winings = ''
		
	}

}])





















