let seconds = 0
input.onButtonPressed(Button.A, function () {
    seconds += 1
    basic.showNumber(seconds)
})
input.onButtonPressed(Button.B, function () {
    while (seconds > 0) {
        basic.showNumber(seconds)
        basic.pause(1000)
        seconds += 0 - 1
    }
    basic.showNumber(0)
})
