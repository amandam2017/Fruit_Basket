// Duck Game:
// have a name,
// have action: chase a player || bite a player

// PLayer:
// Ponits/ current score
// Status . it can die!
// Player got a name
// Player starts with different point


module.exports = function Duck(){
    // variables for ducks
    const sam = Duck('Sam');
    const shona = Duck('Shona');
    const james = Duck('James');
    // put all duck in an array/list
    const Duck = [sam, shona, james];

    // variables for ducks

    const player = Player('Jack', 5);

    console.log(player.getName())

    return{

    }
}