sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    pom.destroy()
    info.changeScoreBy(1)
})
let pom: Sprite = null
pom = sprites.create(assets.image`myImage0`, SpriteKind.Projectile)
let Me = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(Me)
Me.setStayInScreen(true)
scene.setBackgroundColor(5)
info.setScore(0)
info.startCountdown(10)
game.onUpdateInterval(500, function () {
    pom = sprites.createProjectileFromSide(assets.image`myImage0`, 50, 50)
})
