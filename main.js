var app = angular.module('myApp', [])
	app.controller('diceController', ['$scope', function($scope){
	
	$scope.playerTotal = 100
	$scope.outCome = []

	$scope.die1
	$scope.die2
	$scope.winings = 0
	$scope.point = ''
	$scope.comeout = true
	$scope.pointSet = false
	$scope.comeAmount = ''
	$scope.dComeAmount = 0
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
	$scope.Dcome4 = 0
	$scope.Dcome5 = 0
	$scope.Dcome6 = 0
	$scope.Dcome8 = 0
	$scope.Dcome9 = 0
	$scope.Dcome10 = 0
	$scope.comeNumWinings = 0
	$scope.DcomeNumWinings = 0
	$scope.comeWinings = 0
	$scope.dontComeWinings = 0
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
		$scope.outCome = []
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
		Dcome4()
		Dcome5()
		Dcome6()
		Dcome8()
		Dcome9()
		Dcome10()
		come4()
		come5()
		come6()
		come8()
		come9()
		come10()
		come()
		dontCome()
		point()
		gameState()
		addWinings()
		$scope.showChipF = false
		if($scope.passAmount < 1){
			$scope.showChipP = false
		}
		if($scope.dontPassAmount < 1){
			$scope.showChipDP = false
		}
		if($scope.hardFourAmount < 1){
			$scope.showChipH4 = false
		}
		if($scope.hardSixAmount < 1){
			$scope.showChipH6 = false
		}
		if($scope.hardEightAmount < 1){
			$scope.showChipH8 = false
		}
		if($scope.hardTenAmount < 1){
			$scope.showChipH10 = false
		}
		if($scope.Dcome4 < 1){
			$scope.showChipDC4 = false
		}
		if($scope.Dcome5 < 1){
			$scope.showChipDC5 = false
		}
		if($scope.Dcome6 < 1){
			$scope.showChipDC6 = false
		}
		if($scope.Dcome8 < 1){
			$scope.showChipDC8 = false
		}
		if($scope.Dcome9 < 1){
			$scope.showChipDC9 = false
		}
		if($scope.Dcome10 < 1){
			$scope.showChipDC10 = false
		}
		if($scope.come4 < 1){
			$scope.showChipC4 = false
		}
		if($scope.come5 < 1){
			$scope.showChipC5 = false
		}
		if($scope.come6 < 1){
			$scope.showChipC6 = false
		}
		if($scope.come8 < 1){
			$scope.showChipC8 = false
		}
		if($scope.come9 < 1){
			$scope.showChipC9 = false
		}
		if($scope.come10 < 1){
			$scope.showChipC10 = false
		}
		$scope.showChipC = false
		$scope.showChipDC = false
		$scope.showChip7 = false
		$scope.showChipCraps = false
		$scope.showChip12 = false
		$scope.showChip2 = false
		$scope.showChip11 = false
		$scope.showChip3 = false
	}
	


	$scope.passLine = function(){
		$scope.passAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.passAmount
		$scope.showChipP = true
	}
	$scope.dontPass = function(){
		$scope.dontPassAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.dontPassAmount
		$scope.showChipDP = true
	}
	$scope.field = function(){
		$scope.fieldAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.fieldAmount
		$scope.showChipF = true
	}
	$scope.comeBet = function(){
		$scope.comeAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.comeAmount
		$scope.showChipC = true
	}
	$scope.anySeven = function(){
		$scope.anySevenAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.anySevenAmount
		$scope.showChip7 = true
	}
	$scope.anyCraps = function(){
		$scope.anyCrapsAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.anyCrapsAmount
		$scope.showChipCraps = true
	}
	$scope.hardFour = function(){
		$scope.hardFourAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.hardFourAmount
		$scope.showChipH4 = true
	}
	$scope.hardSix = function(){
		$scope.hardSixAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.hardSixAmount
		$scope.showChipH6 = true
	}
	$scope.hardEight = function(){
		$scope.hardEightAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.hardEightAmount
		$scope.showChipH8 = true
	}
	$scope.hardTen = function(){
		$scope.hardTenAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.hardTenAmount
		$scope.showChipH10 = true
	}
	$scope.anyThree = function(){
		$scope.threeAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.threeAmount
		$scope.showChip3 = true
	}
	$scope.anyYo = function(){
		$scope.yoAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.yoAmount
		$scope.showChip11 = true
	}
	$scope.anyTwo = function(){
		$scope.twoAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.twoAmount
		$scope.showChip2 = true
	}
	$scope.anyTwelve = function(){
		$scope.twelveAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.twelveAmount
		$scope.showChip12 = true
	}
	$scope.bigSix = function(){
		$scope.bigSixAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.bigSixAmount
	}
	$scope.bigEight = function(){
		$scope.bigEightAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.bigEightAmount
	}
	$scope.dontCome = function(){
		$scope.dComeAmount = prompt('bet amount?')
		$scope.playerTotal -= $scope.dComeAmount
		$scope.showChipDC = true
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
				$scope.outCome.push(("Won "+$scope.passAmount+" on pass line") )
				$scope.passAmount = ''
			} else if($scope.total === 2 || $scope.total === 3 || $scope.total === 12){
				$scope.Pwinings = 0
				$scope.outCome.push( ("Lost "+$scope.passAmount+" on pass line") )
				$scope.passAmount = ''
			} else {
				console.log('point established, pass bet continues')
			}
		} else if($scope.passAmount > 0 && $scope.point > 1){
			if($scope.total === 7){
				$scope.outCome.push( ('Lost '+$scope.passAmount+' on pass line') )
				$scope.passAmount = ''
			} else if($scope.total === $scope.point){
				$scope.Pwinings = $scope.passAmount*2
				$scope.outCome.push( ('Won'+$scope.passAmount+' on pass line') )
				$scope.passAmount = ''
			}
		}
	}
	function dontPassLineRoll(){
		if($scope.dontPassAmount > 0 && $scope.point < 1) {
			if($scope.total === 2 || $scope.total === 3){
				$scope.DPwinings = $scope.dontPassAmount*2
				$scope.outCome.push( ('Won '+$scope.dontPassAmount+' on dont pass line') )
				$scope.dontPassAmount = ''
			} else if($scope.total === 12){
				$scope.outCome.push( ('Push on dont pass line12') )
				$scope.playerTotal += $scope.dontPassAmount
				$scope.dontPassAmount = ''
			} else if($scope.total === 7 || $scope.total === 11){
				$scope.DPwinings = 0
				$scope.outCome.push( ('Lost '+$scope.dontPassAmount+' on dont pass line') )
				$scope.dontPassAmount = 0
			} else {
				console.log('point established, dont pass bet stays')
			}
		} else if ($scope.dontPassAmount > 0 && $scope.point > 1){
			if($scope.total === 7){
				$scope.DPwinings = $scope.dontPassAmount*2
				$scope.outCome.push( ('Won '+$scope.dontPassAmount+' on dont pass line') )
				$scope.dontPassAmount = ''
			} else if($scope.total === $scope.point){
				$scope.outCome.push( ('Lost '+$scope.dontPassAmount+' on dont pass') )
				$scope.dontPassAmount = ''
			}
		}
	}
	function field(){
		if($scope.fieldAmount > 0) {
			if($scope.total === 3 || $scope.total === 4 || $scope.total === 9 || $scope.total === 10){
				$scope.Fwinings = $scope.fieldAmount*2
				$scope.outCome.push( ('Won '+$scope.fieldAmount+' on field') )
				$scope.fieldAmount = ''
			} else if($scope.total === 2 || $scope.total === 12) {
				$scope.Fwinings = $scope.fieldAmount*3
				$scope.outCome.push( ('Won '+$scope.Fwinings+' on field double') )
				$scope.fieldAmount = ''
			} else {
				$scope.Fwinings = 0
				$scope.outCome.push( ('Lost '+$scope.fieldAmount+' on field') )
				$scope.fieldAmount = ''
			}
		}
	}
	function come(){
		if($scope.point > 0 && $scope.comeAmount > 0){
			if($scope.total === 7 || $scope.total === 11){
				$scope.comeWinings = $scope.comeAmount*2
				$scope.outCome.push( ('Won '+$scope.comeAmount+' on come bet initial') )
				$scope.comeAmount = ''
			} else if($scope.total === 2 || $scope.total === 3 || $scope.total === 12){
				$scope.outCome.push( ('Lost '+$scope.comeAmount+' on come bet initial') )
				$scope.comeAmount = ''
			} else {
				switch($scope.total){
					case 4:
						$scope.come4 = $scope.comeAmount
						$scope.showChipC4 = true
						break
					case 5:
						$scope.come5 = $scope.comeAmount
						$scope.showChipC5 = true
						break
					case 6:
						$scope.come6 = $scope.comeAmount
						$scope.showChipC6 = true
						break
					case 8:
						$scope.come8 = $scope.comeAmount
						$scope.showChipC8 = true
						break
					case 9:
						$scope.come9 = $scope.comeAmount
						$scope.showChipC9 = true
						break
					case 10:
						$scope.come10 = $scope.comeAmount
						$scope.showChipC10 = true
						break
				}
				$scope.comeAmount = ''
			}
		}
	}
	function dontCome(){
		if($scope.point > 0 && $scope.dComeAmount > 0){
			if($scope.total === 2 || $scope.total === 3){
				$scope.dontComeWinings = $scope.dComeAmount*2
				$scope.outCome.push( ('Won '+$scope.dComeAmount+' on dont come initial') )
				$scope.dComeAmount = ''
			} else if($scope.total === 7 || $scope.total === 11){
				$scope.outCome.push( ("Lost "+$scope.dComeAmount+" on dont come initial") )
				$scope.dComeAmount = ''
			} else if($scope.total === 12){
				$scope.playerTotal += $scope.dComeAmount
				$scope.outCome.push("Push on dont come bet initial") 
				$scope.dComeAmount = ''
			} else {
				switch($scope.total){
					case 4:
						$scope.Dcome4 = $scope.dComeAmount
						$scope.showChipDC4 = true
						break
					case 5:
						$scope.Dcome5 = $scope.dComeAmount
						$scope.showChipDC5 = true
						break
					case 6:
						$scope.Dcome6 = $scope.dComeAmount
						$scope.showChipDC6 = true
						break
					case 8:
						$scope.Dcome8 = $scope.dComeAmount
						$scope.showChipDC8 = true
						break
					case 9:
						$scope.Dcome9 = $scope.dComeAmount
						$scope.showChipDC9 = true
						break
					case 10:
						$scope.Dcome10 = $scope.dComeAmount
						$scope.showChipDC10 = true
						break
				}
				$scope.dComeAmount = ''
			}
		}
	}
	function come4(){
		if($scope.come4 > 0){
			switch($scope.total){
				case 7:
					$scope.comeNumWinings = 0
					$scope.outCome.push( ('Lost '+$scope.come4+' on number 4') )
					$scope.come4 = 0
					break
				case 4:
					$scope.comeNumWinings = $scope.come4*4
					$scope.outCome.push( ("Won "+$scope.come4*4+" on number 4") )
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
					$scope.outCome.push( ('Lost '+$scope.come5+' on number 5') )
					$scope.come5 = 0
					break
				case 5:
					$scope.comeNumWinings = $scope.come5*3
					$scope.outCome.push( ("Won "+$scope.come5*3+" on number 5") )
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
					$scope.outCome.push( ('Lost '+$scope.come6+' on number 6') )
					$scope.come6 = 0
					break
				case 6:
					$scope.comeNumWinings = $scope.come6*2
					$scope.outCome.push( ("Won "+$scope.come6*2+" on number 6") )
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
					$scope.outCome.push( ('Lost '+$scope.come8+' on number 8') )
					$scope.come8 = 0
					break
				case 8:
					$scope.comeNumWinings = $scope.come6*2
					$scope.outCome.push( ("Won "+$scope.come8*2+" on number 8") )
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
					$scope.outCome.push( ('Lost '+$scope.come9+' on number 9') )
					$scope.come9 = 0
					break
				case 9:
					$scope.comeNumWinings = $scope.come9*3
					$scope.outCome.push( ("Won "+$scope.come9*3+" on number 9") )
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
					$scope.outCome.push( ('Lost '+$scope.come10+' on number 10') )
					$scope.come10 = 0
					break
				case 10:
					$scope.comeNumWinings = $scope.come10*4
					$scope.outCome.push( ("Won "+$scope.come10*4+" on number 10") )
					$scope.come10 = 0
					break
				default:
					//do nothing
					break
			}
		}
	}

function Dcome4(){
		if($scope.Dcome4 > 0){
			switch($scope.total){
				case 4:
					$scope.DcomeNumWinings = 0
					$scope.outCome.push( ('Lost '+$scope.Dcome4+' on number 4') )
					$scope.Dcome4 = 0
					break
				case 7:
					$scope.DcomeNumWinings = $scope.Dcome4*4
					$scope.outCome.push( ('Won '+$scope.Dcome4*4+' on number 4') )
					$scope.Dcome4 = 0
					break
				default:
					//do nothing
					break 
			}
		}
	}
	function Dcome5(){
		if($scope.Dcome5 > 0){
			switch($scope.total){
				case 5:
					$scope.DcomeNumWinings = 0
					$scope.outCome.push( ('Lost '+$scope.Dcome5+' on number 5') )
					$scope.Dcome5 = 0
					break
				case 7:
					$scope.DcomeNumWinings = $scope.Dcome5*3
					$scope.outCome.push( ('Won '+$scope.Dcome5*3+' on number 5') )
					$scope.Dcome5 = 0
					break
				default:
					//do nothing
					break
			}
		}
	}
	function Dcome6(){
		if($scope.Dcome6 > 0){
			switch($scope.total){
				case 6:
					$scope.DcomeNumWinings = 0
					$scope.outCome.push( ('Lost '+$scope.Dcome6+' on number 6') )
					$scope.Dcome6 = 0
					break
				case 7:
					$scope.DcomeNumWinings = $scope.Dcome6*2
					$scope.outCome.push( ('Won '+$scope.Dcome6*2+' on number 6') )
					$scope.Dcome6 = 0
				default:
					//do nothing
					break
			}
		}
	}
	function Dcome8(){
		if($scope.Dcome8 > 0){
			switch($scope.total){
				case 8:
					$scope.DcomeNumWinings = 0
					$scope.outCome.push( ('Lost '+$scope.Dcome8+' on number 8') )
					$scope.Dcome8 = 0
					break
				case 7:
					$scope.DcomeNumWinings = $scope.Dcome6*2
					$scope.outCome.push( ('Won '+$scope.Dcome8*2+' on number 8') )
					$scope.Dcome8 = 0
					break
				default:
					//do nothing
					break
			}
		}
	}
	function Dcome9(){
		if($scope.Dcome9 > 0){
			switch($scope.total){
				case 9:
					$scope.DcomeNumWinings = 0
					$scope.outCome.push( ('Lost '+$scope.Dcome9+' on number 9') )
					$scope.Dcome9 = 0
					break
				case 7:
					$scope.DcomeNumWinings = $scope.Dcome9*3
					$scope.outCome.push( ('Won '+$scope.Dcome9*3+' on number 9') )
					$scope.Dcome9 = 0
					break
				default:
					//do nothing
					break
			}
		}
	}
	function Dcome10(){
		if($scope.Dcome10 > 0){
			switch($scope.total){
				case 10:
					$scope.DcomeNumWinings = 0
					$scope.outCome.push( ('Lost '+$scope.Dcome10+' on number 10') )
					$scope.Dcome10 = 0
					break
				case 7:
					$scope.DcomeNumWinings = $scope.Dcome10*4
					$scope.outCome.push( ('Won '+$scope.Dcome10*4+' on number 10') )
					$scope.Dcome10 = 0
					break
				default:
					//do nothing
					break
			}
		}
	}
	//--------------------
	function anyseven(){
		if($scope.anySevenAmount > 0){
			if($scope.total === 7){
				$scope.sevenWinings = $scope.anySevenAmount*4
				$scope.outCome.push( ('Won '+$scope.sevenWinings+' on any 7') )
				$scope.anySevenAmount = ''
			} else {
				$scope.outCome.push( ('Lost '+$scope.anySevenAmount+' on any 7') )
				$scope.anySevenAmount = ''
			}
		}
	}
	function anycraps(){
		if($scope.anyCrapsAmount > 0){
			if($scope.total === 2 || $scope.total === 3 || $scope.total === 12){
				$scope.crapsWinings = $scope.anyCrapsAmount*7
				$scope.outCome.push( ('Won '+$scope.crapsWinings+' on any craps') )
				$scope.anyCrapsAmount = ''
			} else {
				$scope.outCome.push( ( 'Lost '+$scope.anyCrapsAmount+' on any craps ') )
				$scope.anyCrapsAmount = ''
			}
		}
	}
	function hardfour(){
		if($scope.hardFourAmount > 0){
			if($scope.total !== 7){
				if($scope.die1 === 2 && $scope.die2 === 2){
					$scope.h4winings = $scope.hardFourAmount*7
					$scope.outCome.push( ("Won "+$scope.h4winings+" on hard 4") )
					$scope.hardFourAmount = 0
				}
			} else {
				$scope.outCome.push( ('Lost '+$scope.hardFourAmount+' on hard 4') )	
				$scope.hardFourAmount = 0
			}
		}
	}
	function hardsix(){
		if($scope.hardSixAmount > 0){
			if($scope.total !== 7){
				if($scope.die1 === 3 && $scope.die2 === 3){
					$scope.h6winings = $scope.hardSixAmount*9
					$scope.outCome.push( ('Won '+$scope.h6winings+' on hard 6') )
					$scope.hardSixAmount = 0
				}
			} else {
				$scope.outCome.push( ('Lost '+$scope.hardSixAmount+' on hard 6') )
				$scope.hardSixAmount = 0
			}
		}
	}
	function hardeight(){
		if($scope.hardEightAmount > 0){
			if($scope.total !== 7) {
				if($scope.die1 === 4 && $scope.die2 === 4){
					$scope.h8winings = $scope.hardEightAmount*9
					$scope.outCome.push( ('Won '+$scope.h8winings+' on hard 8') )
					$scope.hardEightAmount = 0
				}
			} else {
				$scope.outCome.push( ('Lost '+$scope.hardEightAmount+' on hard 8') )
				$scope.hardEightAmount = 0
			}
		}
	}
	function hardten(){
		if($scope.hardTenAmount > 0){
			if($scope.total !== 7){
				if($scope.die1 === 5 && $scope.die2 === 5){
					$scope.h10winings = $scope.hardTenAmount*9
					$scope.outCome.push( ('Won '+$scope.h10winings+' on hard 10') )
					$scope.hardTenAmount = 0
				}
			} else {
				$scope.outCome.push( ('Lost '+$scope.hardTenAmount+' on hard Ten') )
				$scope.hardTenAmount = 0
			}
		}
	}
	function three(){
		if($scope.threeAmount > 0){
			if($scope.total === 3){
				$scope.threeWinings = $scope.threeAmount*15
				$scope.outCome.push( ("Won "+$scope.threeWinings+" on any Three") )
				$scope.threeAmount = 0
			} else {
				$scope.outCome.push( ('Lost '+$scope.threeAmount+' on any Three') )
				$scope.threeAmount = 0
			}
		}
	}
	function eleven(){
		if($scope.yoAmount > 0){
			if($scope.total === 11){
				$scope.yoWinings = $scope.yoAmount*15
				$scope.outCome.push( ("Won "+$scope.yoWinings+" on any Eleven") )
				$scope.yoAmount = 0
			} else {
				$scope.outCome.push( ("Lost "+$scope.yoAmount+" on any Eleven") )
				$scope.yoAmount = 0
			}
		}
	}
	function two(){
		if($scope.twoAmount > 0){
			if($scope.total === 2){
				$scope.twoWinings = $scope.twoAmount*30
				$scope.outCome.push( ('Won '+$scope.twoWinings+' on any two') )
				$scope.twoAmount = 0
			} else {
				$scope.outCome.push( ('Lost '+$scope.twoAmount+' on any two') )
				$scope.twoAmount = 0
			}
		}
	}
	function twelve(){
		if($scope.twelveAmount > 0){
			if($scope.total === 12){
				$scope.twelveWinings = $scope.twelveAmount*30
				$scope.outCome.push( ('Won '+$scope.twelveWinings+' on any twelve') )
				$scope.twelveAmount = 0
			} else {
				$scope.outCome.push( ("Lost "+$scope.twelveAmount+" on any twelve") )
				$scope.twelveAmount = 0
			}
		}
	}
	function bigSix(){
		if($scope.bigSixAmount > 0){
			if($scope.total === 6){
				$scope.BsixWinings = $scope.bigSixAmount*2
				$scope.outCome.push( ('Won '+$scope.bigSixAmount+' on big 6') )
				$scope.bigSixAmount = 0
			} else {
				$scope.outCome.push( ('Lost '+$scope.bigSixAmount+' on big 6') )
				$scope.bigSixAmount = 0
			}
		}
	}
	function bigEight(){
		if($scope.bigEightAmount > 0){
			if($scope.total === 8){
				$scope.BEightWinings = $scope.bigEightAmount*2
				$scope.outCome.push( ('Won '+$scope.bigEightAmount+' on big 8') )
				$scope.bigEightAmount = 0
			} else {
				$scope.outCome.push( ('Lost '+$scope.bigEightAmount+' on big 8') )
				$scope.bigEightAmount = 0
			}
		}
	}
	function addWinings() {
		$scope.totalWinings = $scope.Fwinings+$scope.Pwinings+$scope.DPwinings+$scope.sevenWinings+$scope.crapsWinings+$scope.h4winings+$scope.h6winings+$scope.h8winings+$scope.h10winings+$scope.threeWinings+$scope.yoWinings+$scope.twoWinings+$scope.twelveWinings+$scope.BEightWinings+$scope.BsixWinings+$scope.comeNumWinings+$scope.comeWinings+$scope.DcomeNumWinings+$scope.dontComeWinings
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
		$scope.DcomeNumWinings = 0
		$scope.dontComeWinings = 0
	}
	function point(){
		if($scope.point < 1){
			if($scope.total === 4 || $scope.total === 5 || $scope.total === 6 || $scope.total === 8 || $scope.total === 9 || $scope.total === 10){
				$scope.point = $scope.total
			}
		} else if ($scope.point === $scope.total){
			$scope.point = ''
		} else if($scope.total === 7){
			$scope.point = ''
		}
	}
}])





















