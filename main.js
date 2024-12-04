const player = new Player({
    x: 0,
    y: 0,
    size: 50,
    step: 15,
})
const game = new Game()

game.addObject(player)

requestAnimationFrame((t) => game.update(game))