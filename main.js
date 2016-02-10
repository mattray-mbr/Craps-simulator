var app = angular.module('myApp', [])
	app.controller('diceController', ['$scope', function($scope){
	
	$scope.playerTotal = 100

	$scope.die1
	$scope.die2
	$scope.winings = 0
	$scope.outCome = ''
	$scope.point = ''
	$scope.comeout = true
	$scope.pointSet = false
	$scope.comeAmount = ''
	$scope.comeNumber = ''
	$scope.Fwinings = 0
	$scope.Pwinings = 0
	$scope.DPwinings = 0
	$scope.sevenWinings = 0
	$scope.crapsWinings = 0
	$scope.h4winings = 0
	$scope.h6winings = 0
	$scope.h8winings = 0
	$scope.h10winings = 0
	$scope.threeWinings = 0
	$scope.twoWinings = 0
	$scope.yoWinings = 0
	$scope.twelveWinings = 0
	$scope.BEightWinings = 0
	$scope.BsixWinings = 0
	$scope.come4 = 0
	$scope.come5 = 0
	$scope.come6 = 0
	$scope.come8 = 0
	$scope.come9 = 0
	$scope.come10 = 0
	$scope.comeNumWinings = 0
	$scope.comeWinings = 0
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
		$scope.outCome = ''
		$scope.die1 = Math.floor((Math.random()*6)+1) 
		$scope.die2 = Math.floor((Math.random()*6)+1) 
		var total =  $scope.die1 + $scope.die2
		$scope.total = total
		//rolls
		diceImg1()
		diceImg2()
		passLineRoll()
		dontPassLineRoll()
		field()
		anyseven()
		anycraps()
		hardfour()
		hardsix()
		hardeight()
		hardten()
		two()
		three()
		eleven()
		twelve()
		bigSix()
		bigEight()
		come4()
		come5()
		come6()
		come8()
		come9()
		come10()
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
		$scope.comeAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.comeAmount
		console.log('bet placed on come')
	}
	$scope.anySeven = function(){
		$scope.anySevenAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.anySevenAmount
		console.log('bet placed on any seven')
	}
	$scope.anyCraps = function(){
		$scope.anyCrapsAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.anyCrapsAmount
		console.log('bet placed on and craps')
	}
	$scope.hardFour = function(){
		$scope.hardFourAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.hardFourAmount
		console.log('bet placed on hard 4')
	}
	$scope.hardSix = function(){
		$scope.hardSixAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.hardSixAmount
		console.log('bet placed on hard 6')
	}
	$scope.hardEight = function(){
		$scope.hardEightAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.hardEightAmount
		console.log('bet placed on hard eight')
	}
	$scope.hardTen = function(){
		$scope.hardTenAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.hardTenAmount
		console.log('bet placed on hard ten')
	}
	$scope.anyThree = function(){
		$scope.threeAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.threeAmount
		console.log('bet placed on three')
	}
	$scope.anyYo = function(){
		$scope.yoAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.yoAmount
		console.log('bet placed on yo')
	}
	$scope.anyTwo = function(){
		$scope.twoAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.twoAmount
		console.log('bet placed on two')
	}
	$scope.anyTwelve = function(){
		$scope.twelveAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.twelveAmount
		console.log('bet placed on twelve')
	}
	$scope.bigSix = function(){
		$scope.bigSixAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.bigSixAmount
		console.log('bet placed on big six')
	}
	$scope.bigEight = function(){
		$scope.bigEightAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.bigEightAmount
		console.log('bet placed on big eight')
	}
//--------------- calc odds and payout functions -------------------
	function diceImg1(){
		switch($scope.die1){
			case 1:
				$scope.dieSelect = 'die1'
				break
			case 2:
				$scope.dieSelect = 'die2'
				break
			case 3:
				$scope.dieSelect = 'die3'
				break
			case 4:
				$scope.dieSelect = 'die4'
				break
			case 5:
				$scope.dieSelect = 'die5'
				break
			case 6:
				$scope.dieSelect = 'die6'
				break
			default:
				$scope.dieSelect = 'die1'
		}
	}
	function diceImg2(){
		switch($scope.die2){
			case 1:
				$scope.dieSelect2 = 'die1'
				break
			case 2:
				$scope.dieSelect2 = 'die2'
				break
			case 3:
				$scope.dieSelect2 = 'die3'
				break
			case 4:
				$scope.dieSelect2 = 'die4'
				break
			case 5:
				$scope.dieSelect2 = 'die5'
				break
			case 6:
				$scope.dieSelect2 = 'die6'
				break
			default:
				$scope.dieSelect2 = 'die1'
		}
	}
	function passLineRoll(){
		if($scope.passAmount > 0 && $scope.point < 1){
			if($scope.total === 7 || $scope.total === 11) {
				$scope.Pwinings = $scope.passAmount*2
				$scope.outCome += "you Won on pass" 
				$scope.passAmount = ''
			} else if($scope.total === 2 || $scope.total === 3 || $scope.total === 12){
				$scope.Pwinings = 0
				$scope.outCome = "you lost"
				$scope.passAmount = ''
			} else {
				console.log('point established, pass bet continues')
			}
		} else if($scope.passAmount > 0 && $scope.point > 1){
			if($scope.total === 7){
				$scope.outCome += 'lost on pass bet'
				$scope.passAmount = ''
			} else if($scope.total === $scope.point){
				$scope.Pwinings = $scope.passAmount*2
				$scope.outCome += 'you won on pass'
				$scope.passAmount = ''
			}
		}
	}
	function dontPassLineRoll(){
		if($scope.dontPassAmount > 0 && $scope.point < 1) {
			if($scope.total === 2 || $scope.total === 3){
				$scope.DPwinings = $scope.dontPassAmount*2
				$scope.outCome = 'you won '+ $scope.DPwinings+ ' on dont pass'
				$scope.dontPassAmount = ''
			} else if($scope.total === 12){
				$scope.outCome = 'push on dont pass 12'
				$scope.playerTotal += $scope.dontPassAmount
				$scope.dontPassAmount = ''
			} else if($scope.total === 7 || $scope.total === 11){
				$scope.DPwinings = 0
				$scope.outCome = 'you lost '+ $scope.dontPassAmount+'on dont pass'
				$scope.dontPassAmount = ''
			} else {
				console.log('point established, dont pass bet stays')
			}
		} else if ($scope.dontPassAmount > 0 && $scope.point > 1){
			if($scope.total === 7){
				$scope.DPwinings = $scope.dontPassAmount*2
				$scope.outCome += 'you won on dont pass'
				$scope.dontPassAmount = ''
			} else if($scope.total === $scope.point){
				$scope.outCome += 'you lost on dont pass'
				$scope.dontPassAmount = ''
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
		if($scope.point > 0 && $scope.comeAmount > 0){
			if($scope.total === 7 || $scope.total === 11){
				$scope.comeWinings = $scope.comeAmount*2
				$scope.outCome += 'you won on come bet initial'
				$scope.comeAmount = ''
			} else if($scope.total === 2 || $scope.total === 3 || $scope.total === 12){
				$scope.outCome += 'you lost come bet initial'
				$scope.comeAmount = ''
			} else {
				switch($scope.total){
					case 4:
						$scope.come4 = $scope.comeAmount
						break
					case 5:
						$scope.come5 = $scope.comeAmount
						break
					case 6:
						$scope.come6 = $scope.comeAmount
						break
					case 8:
						$scope.come8 = $scope.comeAmount
						break
					case 9:
						$scope.come9 = $scope.comeAmount
						break
					case 10:
						$scope.come10 = $scope.comeAmount
				}
				$scope.comeAmount = ''
			}
		}
	}
	function come4(){
		if($scope.come4 > 0){
			switch($scope.total){
				case 7:
					$scope.comeNumWinings = 0
					$scope.outCome += 'you lost all come bets'
					$scope.come4 = 0
					break
				case 4:
					$scope.comeNumWinings = $scope.come4*4
					$scope.outCome += "you won come bet on 4"
					$scope.come4 = 0
					break
				default:
					//do nothing
					break 
			}
		}
	}
	function come5(){
		if($scope.come5 > 0){
			switch($scope.total){
				case 7:
					$scope.comeNumWinings = 0
					$scope.outCome += 'you lost all come bets'
					$scope.come5 = 0
					break
				case 5:
					$scope.comeNumWinings = $scope.come5*3
					$scope.outCome += 'you won come bet on 5'
					$scope.come5 = 0
					break
				default:
					//do nothing
					break
			}
		}
	}
	function come6(){
		if($scope.come6 > 0){
			switch($scope.total){
				case 7:
					$scope.comeNumWinings = 0
					$scope.outCome += 'you lost all come bets'
					$scope.come6 = 0
					break
				case 6:
					$scope.comeNumWinings = $scope.come6*2
					$scope.outCome += 'you won come bet on 6'
					$scope.come6 = 0
				default:
					//do nothing
					break
			}
		}
	}
	function come8(){
		if($scope.come8 > 0){
			switch($scope.total){
				case 7:
					$scope.comeNumWinings = 0
					$scope.outCome += 'you lost all come bets'
					$scope.come8 = 0
					break
				case 8:
					$scope.comeNumWinings = $scope.come6*2
					$scope.outCome += "you won come bet on 8"
					$scope.come8 = 0
					break
				default:
					//do nothing
					break
			}
		}
	}
	function come9(){
		if($scope.come9 > 0){
			switch($scope.total){
				case 7:
					$scope.comeNumWinings = 0
					$scope.outCome += 'you lost all come bets'
					$scope.come9 = 0
					break
				case 9:
					$scope.comeNumWinings = $scope.come9*3
					$scope.outCome += 'you won come bet on 9'
					$scope.come9 = 0
					break
				default:
					//do nothing
					break
			}
		}
	}
	function come10(){
		if($scope.come10 > 0){
			switch($scope.total){
				case 7:
					$scope.comeNumWinings = 0
					$scope.outCome += 'you lost all come bets'
					$scope.come10 = 0
					break
				case 10:
					$scope.comeNumWinings = $scope.come10*4
					$scope.outCome += 'you won come bet on 10'
					$scope.come10 = 0
					break
				default:
					//do nothing
					break
			}
		}
	}
	function anyseven(){
		if($scope.anySevenAmount > 0){
			if($scope.total === 7){
				$scope.outCome += 'you won on any 7 '
				$scope.sevenWinings = $scope.anySevenAmount*4
				$scope.anySevenAmount = ''
			} else {
				$scope.outCome += 'you lost on any 7 '
				$scope.anySevenAmount = ''
			}
		}
	}
	function anycraps(){
		if($scope.anyCrapsAmount > 0){
			if($scope.total === 2 || $scope.total === 3 || $scope.total === 12){
				$scope.outCome += 'you won on any craps \n'
				$scope.crapsWinings = $scope.anyCrapsAmount*7
				$scope.anyCrapsAmount = ''
			} else {
				$scope.outCome += 'you lost on any craps '
				$scope.anyCrapsAmount = ''
			}
		}
	}
	function hardfour(){
		if($scope.hardFourAmount > 0){
			if($scope.total !== 7){
				if($scope.die1 === 2 && $scope.die2 === 2){
					$scope.h4winings = $scope.hardFourAmount*7
					$scope.outCome += "you won on hard 4"
					$scope.hardFourAmount = 0
				}
			} else {
				$scope.outCome += 'you lost on hard 4'	
				$scope.hardFourAmount = 0
			}
		}
	}
	function hardsix(){
		if($scope.hardSixAmount > 0){
			if($scope.total !== 7){
				if($scope.die1 === 3 && $scope.die2 === 3){
					$scope.h6winings = $scope.hardSixAmount*9
					$scope.outCome += 'you won on hard 6'
					$scope.hardSixAmount = 0
				}
			} else {
				$scope.outCome += 'you lost on hard 6'
				$scope.hardSixAmount = 0
			}
		}
	}
	function hardeight(){
		if($scope.hardEightAmount > 0){
			if($scope.total !== 7) {
				if($scope.die1 === 4 && $scope.die2 === 4){
					$scope.h8winings = $scope.hardEightAmount*9
					$scope.outCome += 'you won on hard 8'
					$scope.hardEightAmount = 0
				}
			} else {
				$scope.outCome += 'you lost on hard 8'
				$scope.hardEightAmount = 0
			}
		}
	}
	function hardten(){
		if($scope.hardTenAmount > 0){
			if($scope.total !== 7){
				if($scope.die1 === 5 && $scope.die2 === 5){
					$scope.h10winings = $scope.hardTenAmount*9
					$scope.outCome += 'you won on hard 10'
					$scope.hardTenAmount = 0
				}
			} else {
				$scope.outCome += 'you lost on hard 10'
				$scope.hardTenAmount = 0
			}
		}
	}
	function three(){
		if($scope.threeAmount > 0){
			if($scope.total === 3){
				$scope.threeWinings = $scope.threeAmount*15
				$scope.outCome += "you won on any 3"
				$scope.threeAmount = 0
			} else {
				$scope.threeAmount = 0
				$scope.outCome += 'you lost on any 3'
			}
		}
	}
	function eleven(){
		if($scope.yoAmount > 0){
			if($scope.total === 11){
				$scope.yoWinings = $scope.yoAmount*15
				$scope.outCome += "you won on any yo"
				$scope.yoAmount = 0
			} else {
				$scope.yoAmount = 0
				$scope.outCome += "you lost on any yo"
			}
		}
	}
	function two(){
		if($scope.twoAmount > 0){
			if($scope.total === 2){
				$scope.twoWinings = $scope.twoAmount*30
				$scope.outCome += 'you won on any 2'
				$scope.twoAmount = 0
			} else {
				$scope.outCome = 'you lost on any 2'
				$scope.twoAmount = 0
			}
		}
	}
	function twelve(){
		if($scope.twelveAmount > 0){
			if($scope.total === 12){
				$scope.twelveWinings = $scope.twelveAmount*30
				$scope.outCome += 'you won on any 12'
				$scope.twelveAmount = 0
			} else {
				$scope.outCome += "you lost on any twelve"
				$scope.twelveAmount = 0
			}
		}
	}
	function bigSix(){
		if($scope.bigSixAmount > 0){
			if($scope.total === 6){
				$scope.BsixWinings = $scope.bigSixAmount*2
				$scope.outCome += 'you won on big 6'
				$scope.bigSixAmount = 0
			} else {
				$scope.outCome += 'you lost on big 6'
				$scope.bigSixAmount = 0
			}
		}
	}
	function bigEight(){
		if($scope.bigEightAmount > 0){
			if($scope.total === 8){
				$scope.BEightWinings = $scope.bigEightAmount*2
				$scope.outCome += 'you won on big 8'
				$scope.bigEightAmount = 0
			} else {
				$scope.outCome += 'you lost on big 8'
				$scope.bigEightAmount = 0
			}
		}
	}
	function addWinings() {
		$scope.totalWinings = $scope.Fwinings+$scope.Pwinings+$scope.DPwinings+$scope.sevenWinings+$scope.crapsWinings+$scope.h4winings+$scope.h6winings+$scope.h8winings+$scope.h10winings+$scope.threeWinings+$scope.yoWinings+$scope.twoWinings+$scope.twelveWinings+$scope.BEightWinings+$scope.BsixWinings+$scope.comeNumWinings+$scope.comeWinings
		$scope.playerTotal += $scope.totalWinings
		$scope.totalWinings = 0
		$scope.Fwinings = 0
		$scope.Pwinings = 0
		$scope.DPwinings = 0
		$scope.crapsWinings = 0
		$scope.sevenWinings = 0
		$scope.h4winings = 0
		$scope.h6winings = 0
		$scope.h8winings = 0
		$scope.h10winings = 0
		$scope.threeWinings = 0
		$scope.twoWinings = 0
		$scope.yoWinings = 0
		$scope.twelveWinings = 0
		$scope.BsixWinings = 0
		$scope.BEightWinings = 0
		$scope.comeNumWinings = 0
		$scope.comeWinings = 0
	}
	function point(){
		if($scope.point < 1){
			if($scope.total === 4 || $scope.total === 5 || $scope.total === 6 || $scope.total === 8 || $scope.total === 9 || $scope.total === 10){
				$scope.point = $scope.total
			}
		} else if ($scope.point === $scope.total){
			$scope.point = ''
			console.log('point reached')
		} else if($scope.total === 7){
			$scope.point = ''
			console.log('7 out')
		}
	}
}])





















