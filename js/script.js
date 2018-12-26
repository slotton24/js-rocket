// JavaScript Document
var doCoolStuff = function () {
	document.getElementById('cool').className = 'cool red';
}
var car = {
			make: 'Chevy',
			type: 'Silverado',
			color: 'Maroon',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: [
			'seat 1',
			'seat 2',
			'seat 3',
			'seat 4',
			],
	
			turnOn: function () {
				this.isTurnedOn = true;
			},
			turnOff: function () {
				this.isTurnedOn = false;
			},
			fly: function () {
				alert('fly');
			},
			switchCar: function (isON){
				console.log('turn car '+isON)
				if (isON == true) {
					this.isTurnedOn = true;
				} else {
					this.isTurnedOn = false;
				}
			}
		};

		
		
		console.log('hello there friends!')

var sayMyName = function (name) {
	alert('My name is: '+name)
}