module.export = function(name, score){

    let currentScore = score;
    const getName = () => {
        return name.toUppercase();
    }

    function getScore() {
        return currentScore;
    }

    function updateScore(){
        currentScore += value;

    }


    return{
        getName,
        getScore,
        updateScore
    }
    
}