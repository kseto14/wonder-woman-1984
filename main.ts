scene.onOverlapTile(SpriteKind.Player, sprites.castle.shrub, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeScoreBy(1)
    mySprite.startEffect(effects.confetti, 50)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . 
    . . . f f c c c c f f . . . 
    . . f f b c 5 5 c b f f . . 
    . f f c 3 5 2 2 5 3 c f f . 
    . f 5 5 5 5 5 5 5 5 5 5 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . f f f d d d d d d f f f . 
    . f f f e 4 4 4 4 e f f f . 
    . e f f b 2 2 2 2 b f f e . 
    . 4 f f 2 2 2 2 2 2 c f 4 . 
    . 4 4 f 5 5 4 4 5 5 f 4 4 . 
    . . . . 8 8 8 8 8 8 . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.setBackgroundColor(3)
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101020000000101040101010101010101010101010001010001010101010101010101010100010100010101010101010101010101000000000000000000000001010101000101000001010101000100010101000001010004010101000001000401010001010000010101010001010100010100010100010101010100010101000101000000000101010101000000000001010101000101010101010101010101010101010001010101040000000101010101010100010101010101010001010101010101000101010101010100000000010101010000000000000000000101000101010101010101010101010101010301`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . 2 2 . 2 2 . . . . . 2 2 
    2 2 2 . 2 2 . 2 2 . . . . . 2 2 
    2 . 2 . 2 2 . 2 2 2 2 2 2 2 2 2 
    2 2 2 . . . . . . . . . . . 2 2 
    2 2 . 2 2 . . 2 2 2 2 . 2 . 2 2 
    2 . . 2 2 . . 2 2 2 . . 2 . . 2 
    2 . 2 2 . . 2 . . 2 . 2 2 2 . 2 
    2 . 2 2 . 2 2 . . 2 . 2 2 2 . 2 
    2 . . . . 2 2 2 2 2 . . . . . 2 
    2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 . 2 2 2 2 . . . . 2 2 2 2 
    2 2 2 . 2 2 2 2 2 2 2 . 2 2 2 2 
    2 2 2 . 2 2 2 2 2 2 2 . . . . 2 
    2 2 2 . . . . . . . . . 2 2 . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
    `, [myTiles.transparency16,sprites.castle.saplingOak,sprites.castle.tileGrass2,sprites.castle.shrub,sprites.dungeon.chestClosed], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
scene.cameraFollowSprite(mySprite)
info.startCountdown(20)
