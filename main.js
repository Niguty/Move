const player = new Player({
    x: 0,
    y: 0,
    size: 50,
    step: 10,
})
const game = new Game()

game.addObject(player)
game.addObject(npc)

requestAnimationFrame((t) => game.update(game))