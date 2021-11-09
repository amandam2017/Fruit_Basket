let assert = require("assert");
let FruitBasket = require("../fruit-basket");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://codex:pg123@localhost:5432/fruit_basket_tests';

const pool = new Pool({
    connectionString
});


describe('The fruit_basket', function () {
    beforeEach(async function () {
        // clean the tables before each test run
        await pool.query('delete from fruit_basket');

    });

    it('should get fruits from fruit basket', async function () {

        let basketOfFruit = FruitBasket(pool);

        await basketOfFruit.dbInstertingQ('Banana', 3.00)
        console.log('list?'+ JSON.stringify(await basketOfFruit.getFruitsFromBasketOne()))

    
        assert.deepEqual( [ {
            fruit_name: 'Banana', quantity: 1, price: 3.00}], await basketOfFruit.getFruitsFromBasketOne());
        });

    it('should increament the quantity of fruit that already exist in the fruit basket', async function () {

        let basketOfFruit = FruitBasket(pool);

        await basketOfFruit.dbInstertingQ('Banana', 3.00);
        await basketOfFruit.dbInstertingQ('Banana', 3.00);

        assert.equal( [ {quantity: 2,}], await basketOfFruit.updateQTY());

    });

    it('should show the total price for a given fruit basket', async function () {

        let basketOfFruit = FruitBasket(pool);

        await basketOfFruit.dbInstertingQ('Banana', 3.00);

        // console.log('list?'+ JSON.stringify(await basketOfFruit.getFruitsFromBasketOne()))

    
        assert.deepEqual( [ {"price": 3.00,}], await basketOfFruit.getPriceFromBasket());

    });
    
});