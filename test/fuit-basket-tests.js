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

        await basketOfFruit.dbInstertingQ('Banana', 1, 3.00);

        // console.log('list?'+ JSON.stringify(await basketOfFruit.getFruitsFromBasketOne()))

    
        assert.deepEqual( [ {
            fruit_name: 'Banana', quantity: 1, price: 3.00}], await basketOfFruit.getFruitsFromBasketOne());
        });

    it('should increament the quantity of fruit that already exist in the fruit basket', async function () {

        let basketOfFruit = FruitBasket(pool);

        await basketOfFruit.dbInstertingQ('Apple', 1, 3.00);
        await basketOfFruit.updateQTY('Apple', 5);

        assert.deepEqual( [ {fruit_name: 'Apple', quantity: 6, price: 3.00}], await basketOfFruit.getFruitsFromBasketOne());

    });

    it('should show the total price for a given fruit basket', async function () {

        let basketOfFruit = FruitBasket(pool);

        await basketOfFruit.dbInstertingQ('Apple', 1, 3.00);

        assert.deepEqual( [ {price: 3.00}], await basketOfFruit.getPriceFromBasket('Apple'));

    });

    it('should show the total fruit for a given fruit basket', async function () {

        let basketOfFruit = FruitBasket(pool);

        await basketOfFruit.dbInstertingQ('Kiwi', 1, 8.00);
        await basketOfFruit.updateQTY('Kiwi', 10);
    
        assert.deepEqual( [ {"quantity": 11,}], await basketOfFruit.getTotalFruit('Kiwi'));

    });
    
});
