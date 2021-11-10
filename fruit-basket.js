module.exports = function FruitBasket(pool){
    const dbInstertingQ = async (name, quantity, price) => {
        // find all the fruit baskets for a given fruit type,
        const fruits = await pool.query('SELECT fruit_name FROM fruit_basket WHERE fruit_name = $1',[name]);

        // update the number of fruits in a given basket,
        if(fruits.rowCount === 0){
            const count = await pool.query('INSERT INTO fruit_basket (fruit_name, quantity, price) VALUES ($1,$2,$3)', [name, quantity, price]);
        }

    }

    const updateQTY = async (fruitName, quantity) => {
        var udateBasket = await pool.query('UPDATE fruit_basket SET quantity = quantity+$2 WHERE fruit_name = $1', [fruitName, quantity]);
    }

    const getFruitsFromBasketOne = async () => {
        var allFruits = await pool.query('SELECT fruit_name, quantity, price FROM fruit_basket');
        return allFruits.rows;
    } 

      //show the total price of a given fruit basket
      const getPriceFromBasket = async (fruit) => {
        var totalPrice = await pool.query('SELECT sum(price * quantity) as price FROM fruit_basket WHERE fruit_name = $1', [fruit]);
        return totalPrice.rows;
    }

    // show the sum of the total of the fruit baskets for a given fruit type.
    const getTotalFruit = async (fruit) => {
        var totalFruit = await pool.query('SELECT sum(quantity) as quantity FROM fruit_basket WHERE fruit_name = $1', [fruit]);
        return totalFruit.rows;
    }
    

    return{
        dbInstertingQ,
        getFruitsFromBasketOne,
        getPriceFromBasket,
        updateQTY,
        getTotalFruit,
    }
}

// $1 stands for the value of the in a first position in an array
// $2 stands for the value of the in a 2nd position in an array
//I had update in another function
//Qty = I was increamenting quantity by 1