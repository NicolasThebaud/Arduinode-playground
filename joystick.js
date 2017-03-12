const j5 = require('johnny-five'),
	board = new j5.Board()

board.on('ready', function() {
	var joystick = new j5.Joystick({
		pins: ['A0', 'A2']
	})

	var UP = new j5.Led(5),
		DOWN = new j5.Led(10),
		LEFT = new j5.Led(7),
		RIGHT = new j5.Led(8)

	joystick.on('change',  function() {
		if((this.x*10) >= 0) UP.on(), DOWN.off()
		else if((this.x*10) < 0) DOWN.on(), UP.off()
		if((this.y*10) < 0) LEFT.on(), RIGHT.off()
		else if((this.y*10) >= 0) RIGHT.on(), LEFT.off()

		console.log('\033c')
		console.log("****** Joystick ******")
		console.log('x : ', this.x)
		console.log('y : ', this.y)
		console.log("**********************")
		console.log('is UP lit', ((this.x*10) >= 0))
		console.log('is DOWN lit', ((this.x*10) < 0))
		console.log('is LEFT lit', ((this.y*10) < 0))
		console.log('is RIGHT lit', ((this.y*10) >= 0))
		console.log("**********************")
	})
})
