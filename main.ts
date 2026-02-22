input.onButtonPressed(Button.A, function () {
    basic.showString("LOADING PATH")
    while (!(input.logoIsPressed())) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # . . .
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . .
            # # # . .
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . .
            # . . . .
            # # # # .
            `)
        basic.showLeds(`
            # # # # #
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            `)
        basic.showLeds(`
            # # # # .
            # . . . .
            # . . . .
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # . .
            # . . . .
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # . . .
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            . . # # #
            . . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            . # # # #
            . . . . #
            . . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            . . . . #
            . . . . #
            . . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            . . . . #
            . . . . #
            . # # # #
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            . . . . #
            . . # # #
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            . . . # #
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # . . # #
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(1, 6))
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        `)
})
