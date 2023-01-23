/**
 * 256 stlačilo sa B
 */
/**
 * 257 = teplota OK
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > 900) {
        basic.showString("" + (receivedNumber - 1000))
        alarm = 1
    } else if (receivedNumber == 256) {
        alarm = 0
        ignoruj = 5
        basic.showIcon(IconNames.No)
    } else if (receivedNumber == 257) {
        alarm = 0
        ignoruj = 0
        basic.showIcon(IconNames.Yes)
    }
})
let ignoruj = 0
let alarm = 0
radio.setGroup(1)
alarm = 0
ignoruj = 0
loops.everyInterval(10000, function () {
    if (alarm == 1 && ignoruj == 0) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showIcon(IconNames.Sad)
    }
})
loops.everyInterval(60000, function () {
    if (ignoruj > 0) {
        ignoruj += -1
    }
})
