var app = angular.module('myApp', [])
	app.controller('mainController', ['$scope', '$timeout', function($scope, $timeout){
	

	$scope.playerTotal = 200
	$scope.outCome = []

	$scope.die1
	$scope.die2
	$scope.winings = 0
    $scope.total = 0
	$scope.point = ''
	$scope.comeout = true
	$scope.pointSet = false
	$scope.comeAmount = ''
	$scope.dComeAmount = ''
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
	$scope.buy4Winings = 0
	$scope.buy5Winings = 0
	$scope.buy6Winings = 0
	$scope.buy8Winings = 0
	$scope.buy9Winings = 0
	$scope.buy10Winings = 0
	$scope.comeNumWinings = 0
	$scope.DcomeNumWinings = 0
	$scope.comeWinings = 0
	$scope.dontComeWinings = 0
	$scope.oddsPassWinings = 0
	$scope.oddsDontPassWinings = 0
	$scope.betAmount = 0
             $scope.buy5House = 0
             $scope.buy6House = 0
             $scope.buy8House = 0
             $scope.buy9House = 0
	$scope.totalWinings = 0
             $scope.truePayout = 0
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
        $scope.truePayout = 0
        $scope.totalWinings = 0
        $scope.outCome = []
        $scope.die1 = Math.floor((Math.random()*6)+1) 
        $scope.die2 = Math.floor((Math.random()*6)+1) 
        var total =  $scope.die1 + $scope.die2
        $scope.total = total
        //rolls
        diceImg1()
        diceImg2()
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
        oddsPass()
        oddsDontPass()
        dontPassLineRoll()
        passLineRoll()
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
        buy4()
        buy5()
        buy6()
        buy8()
        buy9()
        buy10()
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
        if($scope.buy4Amount < 1){
            $scope.showChipBuy4 = false
        }
        if($scope.buy5Amount < 1){
            $scope.showChipBuy5 = false
        }
        if($scope.buy6Amount < 1){
            $scope.showChipBuy6 = false
        }
        if($scope.buy8Amount < 1){
            $scope.showChipBuy8 = false
        }
        if($scope.buy9Amount < 1){
            $scope.showChipBuy9 = false
        }
        if($scope.buy10Amount < 1){
            $scope.showChipBuy10 = false
        }
        if($scope.bigSixAmount < 1){
            $scope.showChipBig6 = false
        }
        if($scope.bigEightAmount < 1){
            $scope.showChipBig8 = false
        }
        if($scope.oddsPassAmount < 1){
            $scope.showChipPassOdds = false
        }
        if($scope.oddsDontPassAmount < 1){
            $scope.showChipDontPassOdds = false
        }
        $scope.showChipC = false
        $scope.showChipDC = false
        $scope.showChip7 = false
        $scope.showChipCraps = false
        $scope.showChip12 = false
        $scope.showChip2 = false
        $scope.showChip11 = false
        $scope.showChip3 = false
        $scope.betAmount = 0
	}
	//focus on input field for click events
	$scope.click = function(event){
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0][0].focus();
		})
		
	}

	//all form submissions
	$scope.passForm = function(event){
		$scope.playerTotal -= $scope.passAmount
		$scope.betAmount += $scope.passAmount
		$scope.showChipP = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.dontPassForm = function(event){
		$scope.playerTotal -= $scope.dontPassAmount
		$scope.betAmount +=  $scope.dontPassAmount
		$scope.showChipDP = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.fieldForm = function(event){
		$scope.playerTotal -= $scope.fieldAmount
		$scope.betAmount = $scope.betAmount + $scope.fieldAmount
		$scope.showChipF = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.comeForm = function(event){
		$scope.playerTotal -= $scope.comeAmount
		$scope.betAmount += $scope.comeAmount
		$scope.showChipC = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.anySevenForm = function(event){
		$scope.playerTotal -= $scope.anySevenAmount
		$scope.betAmount += $scope.anySevenAmount
		$scope.showChip7 = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.anyCrapsForm = function(event){
		$scope.playerTotal -= $scope.anyCrapsAmount
		$scope.betAmount += $scope.anyCrapsAmount
		$scope.showChipCraps = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.hardFourForm = function(event){
		$scope.playerTotal -= $scope.hardFourAmount
		$scope.betAmount += $scope.hardFourAmount
		$scope.showChipH4 = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.hardSixForm = function(event){
		$scope.playerTotal -= $scope.hardSixAmount
		$scope.betAmount += $scope.hardSixAmount
		$scope.showChipH6 = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.hardEightForm = function(event){
		$scope.playerTotal -= $scope.hardEightAmount
		$scope.betAmount += $scope.hardEightAmount
		$scope.showChipH8 = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.hardTenForm = function(event){
		$scope.playerTotal -= $scope.hardTenAmount
		$scope.betAmount += $scope.hardTenAmount
		$scope.showChipH10 = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.anyThreeForm = function(event){
		$scope.playerTotal -= $scope.threeAmount
		$scope.betAmount += $scope.threeAmount
		$scope.showChip3 = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.anyYoForm = function(event){
		$scope.playerTotal -= $scope.yoAmount
		$scope.betAmount += $scope.yoAmount
		$scope.showChip11 = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.anyTwoForm = function(event){
		$scope.playerTotal -= $scope.twoAmount
		$scope.betAmount += $scope.twoAmount
		$scope.showChip2 = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.anyTwelveForm = function(event){
		$scope.playerTotal -= $scope.twelveAmount
		$scope.betAmount += $scope.twelveAmount
		$scope.showChip12 = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.bigSixForm = function(event){
		$scope.playerTotal -= $scope.bigSixAmount
		$scope.betAmount += $scope.bigSixAmount
		$scope.showChipBig6 = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.bigEightForm = function(event){
		$scope.playerTotal -= $scope.bigEightAmount
		$scope.betAmount += $scope.bigEightAmount
		$scope.showChipBig8 = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.dontComeForm = function(event){
		$scope.playerTotal -= $scope.dComeAmount
		$scope.betAmount += $scope.dComeAmount
		$scope.showChipDC = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.buy4Form = function(event){
		$scope.playerTotal -= $scope.buy4Amount
		$scope.betAmount += $scope.buy4Amount
		$scope.showChipBuy4 = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.buy5Form = function(event){
		$scope.playerTotal -= $scope.buy5Amount
		$scope.betAmount += $scope.buy5Amount
		$scope.showChipBuy5 = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.buy6Form = function(event){
		$scope.playerTotal -= $scope.buy6Amount
		$scope.betAmount += $scope.buy6Amount
		$scope.showChipBuy6 = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.buy8Form = function(event){
		$scope.playerTotal -= $scope.buy8Amount
		$scope.betAmount += $scope.buy8Amount
		$scope.showChipBuy8 = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.buy9Form = function(event){
		$scope.playerTotal -= $scope.buy9Amount
		$scope.betAmount += $scope.buy9Amount
		$scope.showChipBuy9 = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.buy10Form = function(event){
		$scope.playerTotal -= $scope.buy10Amount
		$scope.betAmount += $scope.buy10Amount
		$scope.showChipBuy10 = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.oddsPassForm = function(event){
		$scope.playerTotal -= $scope.oddsPassAmount
		$scope.betAmount += $scope.oddsPassAmount
		$scope.showChipPassOdds = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
	}
	$scope.oddsDpassForm = function(event){
		$scope.playerTotal -= $scope.oddsDontPassAmount
		$scope.betAmount += $scope.oddsDontPassAmount
		$scope.showChipDontPassOdds = true
		$timeout(function(){
			event.stopPropagation()
			event.target.children[0].blur();
		})
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
	function oddsPass(){
		if($scope.oddsPassAmount > 0){
			if($scope.total === $scope.point){
				$scope.oddsPassWinings = $scope.oddsPassAmount*2
				$scope.outCome.push( ('Won '+$scope.oddsPassAmount+' on pass odds'))
				$scope.oddsPassAmount = ''
			} else if($scope.total === 7){
				$scope.outCome.push( ('Lost '+$scope.oddsPassAmount+' on pass odds'))
				$scope.oddsPassAmount = ''
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
				$scope.DPwinings = $scope.dontPassAmount*1
				$scope.outCome.push( ('Push dont pass on 12') )
				console.log($scope.DPwinings)
				console.log($scope.dontPassAmount)
				$scope.dontPassAmount = ''
			} else if($scope.total === 7 || $scope.total === 11){
				$scope.DPwinings = 0
				$scope.outCome.push( ('Lost '+$scope.dontPassAmount+' on dont pass') )
				$scope.dontPassAmount = ''
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
	function oddsDontPass(){
		if($scope.oddsDontPassAmount > 0){
			if($scope.total === $scope.point){
				$scope.outCome.push( ('Lost '+$scope.oddsDontPassAmount+' on dont pass odds'))
				$scope.oddsDontPassAmount = ''
			} else if($scope.total === 7){
				$scope.oddsDontPassWinings = $scope.oddsDontPassAmount*2
				$scope.outCome.push( ('Won '+$scope.oddsDontPassAmount+' on dont pass odds'))
				$scope.oddsDontPassAmount = ''
			}
		}
	}
	function field(){
		if($scope.fieldAmount > 0) {
			if($scope.total === 3 || $scope.total === 4 || $scope.total === 9 || $scope.total === 10 || $scope.total === 11){
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
					$scope.hardFourAmount = ''
				}
			} else {
				$scope.outCome.push( ('Lost '+$scope.hardFourAmount+' on hard 4') )	
				$scope.hardFourAmount = ''
			}
		}
	}
	function hardsix(){
		if($scope.hardSixAmount > 0){
			if($scope.total !== 7){
				if($scope.die1 === 3 && $scope.die2 === 3){
					$scope.h6winings = $scope.hardSixAmount*9
					$scope.outCome.push( ('Won '+$scope.h6winings+' on hard 6') )
					$scope.hardSixAmount = ''
				}
			} else {
				$scope.outCome.push( ('Lost '+$scope.hardSixAmount+' on hard 6') )
				$scope.hardSixAmount = ''
			}
		}
	}
	function hardeight(){
		if($scope.hardEightAmount > 0){
			if($scope.total !== 7) {
				if($scope.die1 === 4 && $scope.die2 === 4){
					$scope.h8winings = $scope.hardEightAmount*9
					$scope.outCome.push( ('Won '+$scope.h8winings+' on hard 8') )
					$scope.hardEightAmount = ''
				}
			} else {
				$scope.outCome.push( ('Lost '+$scope.hardEightAmount+' on hard 8') )
				$scope.hardEightAmount = ''
			}
		}
	}
	function hardten(){
		if($scope.hardTenAmount > 0){
			if($scope.total !== 7){
				if($scope.die1 === 5 && $scope.die2 === 5){
					$scope.h10winings = $scope.hardTenAmount*9
					$scope.outCome.push( ('Won '+$scope.h10winings+' on hard 10') )
					$scope.hardTenAmount = ''
				}
			} else {
				$scope.outCome.push( ('Lost '+$scope.hardTenAmount+' on hard Ten') )
				$scope.hardTenAmount = ''
			}
		}
	}
	function three(){
		if($scope.threeAmount > 0){
			if($scope.total === 3){
				$scope.threeWinings = $scope.threeAmount*15
				$scope.outCome.push( ("Won "+$scope.threeWinings+" on any Three") )
				$scope.threeAmount = ''
			} else {
				$scope.outCome.push( ('Lost '+$scope.threeAmount+' on any Three') )
				$scope.threeAmount = ''
			}
		}
	}
	function eleven(){
		if($scope.yoAmount > 0){
			if($scope.total === 11){
				$scope.yoWinings = $scope.yoAmount*15
				$scope.outCome.push( ("Won "+$scope.yoWinings+" on any Eleven") )
				$scope.yoAmount = ''
			} else {
				$scope.outCome.push( ("Lost "+$scope.yoAmount+" on any Eleven") )
				$scope.yoAmount = ''
			}
		}
	}
	function two(){
		if($scope.twoAmount > 0){
			if($scope.total === 2){
				$scope.twoWinings = $scope.twoAmount*30
				$scope.outCome.push( ('Won '+$scope.twoWinings+' on any two') )
				$scope.twoAmount = ''
			} else {
				$scope.outCome.push( ('Lost '+$scope.twoAmount+' on any two') )
				$scope.twoAmount = ''
			}
		}
	}
	function twelve(){
		if($scope.twelveAmount > 0){
			if($scope.total === 12){
				$scope.twelveWinings = $scope.twelveAmount*30
				$scope.outCome.push( ('Won '+$scope.twelveWinings+' on any twelve') )
				$scope.twelveAmount = ''
			} else {
				$scope.outCome.push( ("Lost "+$scope.twelveAmount+" on any twelve") )
				$scope.twelveAmount = ''
			}
		}
	}
	function bigSix(){
		if($scope.bigSixAmount > 0){
			if($scope.total === 6){
				$scope.BsixWinings = $scope.bigSixAmount*2
				$scope.outCome.push( ('Won '+$scope.bigSixAmount+' on big 6') )
				$scope.bigSixAmount = ''
			} else {
				$scope.outCome.push( ('Lost '+$scope.bigSixAmount+' on big 6') )
				$scope.bigSixAmount = ''
			}
		}
	}
	function bigEight(){
		if($scope.bigEightAmount > 0){
			if($scope.total === 8){
				$scope.BEightWinings = $scope.bigEightAmount*2
				$scope.outCome.push( ('Won '+$scope.bigEightAmount+' on big 8') )
				$scope.bigEightAmount = ''
			} else {
				$scope.outCome.push( ('Lost '+$scope.bigEightAmount+' on big 8') )
				$scope.bigEightAmount = ''
			}
		}
	}
	function buy4(){
		if($scope.buy4Amount >= 1){
			if($scope.total === 4){
				$scope.buy4Winings = $scope.buy4Amount*4
				$scope.outCome.push( ('Won '+$scope.buy4Amount*3+' on buy 4'))
				$scope.buy4Amount = ''
			} else if($scope.total === 7){
				$scope.outCome.push( ('Lost '+$scope.buy4Amount+' on buy 4'))
				$scope.buy4Amount = ''
			}
		}
	}
	function buy5(){
		if($scope.buy5Amount >=1){
			if($scope.total === 5){
                                                    $scope.buy5TrueWinings = ($scope.buy5Amount*(7/5))
                                                    console.log($scope.buy5TrueWinings)
				$scope.buy5Winings = Math.floor($scope.buy5TrueWinings)
                                                    $scope.buy5House = (($scope.buy5Amount*(7/5))-$scope.buy5Winings)
				$scope.outCome.push( ('Won '+$scope.buy5Amount*3+' on buy 5'))
				$scope.buy5Amount = ''
			} else if($scope.total === 7){
				$scope.outCome.push( ('Lost '+$scope.buy5Amount+' on buy 5'))
				$scope.buy5Amount = ''
			} 
		}
	}
	function buy6(){
		if($scope.buy6Amount >= 1){
			if($scope.total === 6){
                                                    $scope.buy6TrueWinings = ($scope.buy8Amount*(7/6))
				$scope.buy6Winings = Math.floor($scope.buy6TrueWinings)
                                                    $scope.buy6House = (($scope.buy6Amount*(7/6)-$scope.buy6Winings))
				$scope.outCome.push( ('Won '+$scope.buy6Amount+' on buy 6'))
				$scope.buy6Amount = ''
			} else if($scope.total === 7){
				$scope.outCome.push( ('Lost '+$scope.buy6Amount+' on buy 6'))
				$scope.buy6Amount = ''
			} 
		}
	}
	function buy8(){
		if($scope.buy8Amount >= 1){
			if($scope.total === 8){
				$scope.buy8TrueWinings = ($scope.buy8Amount*(7/6))
                                                    $scope.buy8Winings = Math.floor($scope.buy8TrueWinings)
                                                    $scope.buy8House = (($scope.buy8Amount*(7/6)-$scope.buy8Winings))
				$scope.outCome.push( ('Won '+$scope.buy8Amount+' on buy 8'))
				$scope.buy8Amount = ''
			} else if($scope.total === 7){
				$scope.outCome.push( ('Lost '+$scope.buy8Amount+' on buy 8'))
				$scope.buy8Amount = ''
			} 
		}
	}
	function buy9(){
		if($scope.buy9Amount >= 1){
			if($scope.total === 9){
				$scope.buy9TrueWinings = ($scope.buy9Amount*(7/5))
                                                    console.log($scope.buy9TrueWinings)
                                                    $scope.buy9Winings = Math.floor($scope.buy9TrueWinings)
                                                    $scope.buy9House = (($scope.buy9Amount*(7/5))-$scope.buy9Winings)
				$scope.outCome.push( ('Won '+$scope.buy9Amount*3+' on buy 9'))
				$scope.buy9Amount = ''
			} else if($scope.total === 7){
				$scope.outCome.push( ('Lost '+$scope.buy9Amount+' on buy 9'))
				$scope.buy9Amount = ''
			} 
		}
	}
	function buy10(){
		if($scope.buy10Amount >= 1){
			if($scope.total === 10){
				$scope.buy10Winings = $scope.buy10Amount*4
				$scope.outCome.push( ('Won '+$scope.buy10Amount*3+' on buy 10'))
				$scope.buy10Amount = ''
			} else if($scope.total === 7){
				$scope.outCome.push( ('Lost '+$scope.buy10Amount+' on buy 10'))
				$scope.buy10Amount = ''
			} 
		}
	}
	function addWinings() {
		$scope.totalWinings = $scope.Fwinings+$scope.Pwinings+$scope.DPwinings+$scope.sevenWinings+$scope.crapsWinings+$scope.h4winings+$scope.h6winings+$scope.h8winings+$scope.h10winings+$scope.threeWinings+$scope.yoWinings+$scope.twoWinings+$scope.twelveWinings+$scope.BEightWinings+$scope.BsixWinings+$scope.comeNumWinings+$scope.comeWinings+$scope.DcomeNumWinings+$scope.dontComeWinings+$scope.buy4Winings+$scope.buy5Winings+$scope.buy6Winings+$scope.buy8Winings+$scope.buy9Winings+$scope.buy10Winings+$scope.oddsPassWinings+$scope.oddsDontPassWinings
		$scope.playerTotal += $scope.totalWinings
		$scope.truePayout = $scope.buy5House+$scope.buy6House+$scope.buy8House+$scope.buy9House
        console.log($scope.truePayout)
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
		$scope.buy4Winings = 0
		$scope.buy5Winings = 0
		$scope.buy6Winings = 0
		$scope.buy8Winings = 0
		$scope.buy9Winings = 0
		$scope.buy10Winings = 0
		$scope.oddsPassWinings = 0
		$scope.oddsDontPassWinings = 0
                          $scope.buy5House = 0
                          $scope.buy6House = 0
                          $scope.buy8House = 0
                          $scope.buy9House = 0
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





















