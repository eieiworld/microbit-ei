basic.forever(function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (input.buttonIsPressed(Button.B) && input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # # # #
            # # # # #
            `)
    }
})
