radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > 900) {
        basic.showString("" + (receivedNumber - 1000))
        alarm = 1
    } else if (receivedNumber == 256) {
        alarm = 0
        ignoruj = 5
    } else if (receivedNumber == 257) {
        alarm = 0
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(input.temperature() + 1000)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(256)
})
let ignoruj = 0
let alarm = 0
radio.setGroup(1)
alarm = 0
ignoruj = 0
loops.everyInterval(500, function () {
    if (input.temperature() <= 20) {
        radio.sendNumber(input.temperature() + 1000)
    } else {
        radio.sendNumber(257)
    }
})
loops.everyInterval(500, function () {
    if (alarm && ignoruj == 0) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
})
loops.everyInterval(60000, function () {
    if (ignoruj > 0) {
        ignoruj += -1
    }
})
basic.forever(function () {
	
})
