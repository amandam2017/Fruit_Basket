module.exports = function FruitBasket(pool){
    const dbInstertingQ = async (name, price, quantity) => {
        // find all the fruit baskets for a given fruit type,
        const fruits = await pool.query('SELECT fruit_name FROM fruit_basket WHERE fruit_name = $1',[name]);

        if(fruits.rowCount === 0){
            const count = await pool.query('INSERT INTO fruit_basket (fruit_name, quantity, price) VALUES ($1,$2,$3)', [name, 1, price]);
        }else{
            // update the number of fruits in a given basket,
            var udateBasket = await pool.query('UPDATE fruit_basket SET quantity = quantity+1 WHERE fruit_name = $1', [quantity]);
   
        }
    }

    const updateQTY = async () => {
        // await dbInstertingQ();
        // console.log('quantity:' + quantity)
        var udateBasket = await pool.query('SELECT quantity FROM fruit_basket');
        return udateBasket.rows;
    }

    const getFruitsFromBasketOne = async () => {
        var allFruits = await pool.query('SELECT fruit_name, quantity, price FROM fruit_basket');
        return allFruits.rows;
    } 

      //show the total price of a given fruit basket
      const getPriceFromBasket = async () => {
        var totalPrice = await pool.query('SELECT sum(price) as price FROM fruit_basket');
        return totalPrice.rows;
    }

    // show the sum of the total of the fruit baskets for a given fruit type.
    const getTotalFruit = async () => {
        var totalPrice = await pool.query('SELECT sum(quantity) FROM fruit_basket');
        return totalPrice.rows;
    }

    return{
        dbInstertingQ,
        getFruitsFromBasketOne,
        getPriceFromBasket,
        updateQTY,
        getTotalFruit
    }
}

