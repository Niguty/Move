const player = new Player(0, 0, 50)
const game = new Game()

game.addObject(player)

requestAnimationFrame((t) => game.update(game))