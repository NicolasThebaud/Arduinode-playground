const j5 = require('johnny-five'),
	board = new j5.Board()

board.on('ready', function() {
	var joystick = new j5.Joystick({
		pins: ['A0', 'A2']
	})

	joystick.on('change',  function() {
		console.log('\033c')
		console.log("****** Joystick ******")
		console.log('x : ', this.x)
		console.log('y : ', this.y)
		console.log("**********************")
	})
})
