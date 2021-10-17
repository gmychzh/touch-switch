basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    if (mbit_输入类.TouchPad(DigitalPin.P0, mbit_输入类.enTouch.Touch)) {
        basic.showLeds(`
            # . . . #
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(1000)
    }
})
