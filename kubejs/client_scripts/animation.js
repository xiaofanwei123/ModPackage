NetworkEvents.dataReceived("animation",event=>{
    let itemID=event.data.item
    let item=Item.of(itemID)
    Client.gameRenderer.displayItemActivation(item)
})
NetworkEvents.dataReceived("sound",event=>{
    let sound=event.data.sound
    let player=event.player
    player.playSound(sound)
})

