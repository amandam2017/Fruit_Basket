module.export = function(name){
    const getName = () => {
        return name.toUppercase();
    }

    function chase(thePlayer) {
        console.log('-> $t{hePlayer}')
        thePlayer.updateScore(-1);
    }


    return{
        getName,
        chase
    }
    
}