const j5 = require('johnny-five'),
	board = new j5.Board()
 
board.on('ready', function() {
	var led = new j5.Led(8)
	led.blink(250)
})
