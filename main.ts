let SALTOS = 0
input.onButtonPressed(Button.A, function () {
    SALTOS += 1
    basic.showNumber(SALTOS)
})
input.onButtonPressed(Button.AB, function () {
    SALTOS = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(SALTOS)
})
