input.onButtonPressed(Button.A, function () {
    if (GameStart == true) {
        bird.change(LedSpriteProperty.Y, -1)
    }
})
function flappybird () {
    Pipes = []
    bird = game.createSprite(0, 2)
    bird.set(LedSpriteProperty.Blink, 300)
    while (GameStart == true) {
        bird.change(LedSpriteProperty.Y, 1)
        pipeGenerating()
    }
}
input.onButtonPressed(Button.AB, function () {
    GameStart = true
    flappybird()
})
radio.onReceivedString(function (receivedString) {
    if (GameStart == true && receivedString == "moving") {
        game.pause()
    }
    if (GameStart == true && receivedString == "closed") {
        game.resume()
    }
})
input.onButtonPressed(Button.B, function () {
    if (GameStart == true && game.isPaused()) {
        game.resume()
    } else if (GameStart == true && game.isRunning()) {
        game.pause()
    }
})
function pipeGenerating () {
    while (Pipes.length > 0 && Pipes[0].get(LedSpriteProperty.X) == 0) {
        Pipes.removeAt(0).delete()
    }
    for (let pipe of Pipes) {
        pipe.change(LedSpriteProperty.X, -1)
    }
    if (gapBetweenPipes % 3 == 0) {
        emptyHoleOfPipe = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != emptyHoleOfPipe) {
                Pipes.push(game.createSprite(4, index))
            }
        }
    }
    for (let pipe of Pipes) {
        if (pipe.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && pipe.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
            GameStart = false
        }
    }
    gapBetweenPipes += 1
    basic.pause(1000)
    while (game.isPaused()) {
        basic.pause(1000)
    }
}
let emptyHoleOfPipe = 0
let gapBetweenPipes = 0
let Pipes: game.LedSprite[] = []
let bird: game.LedSprite = null
let GameStart = false
radio.setGroup(24)
basic.showIcon(IconNames.Sad)
