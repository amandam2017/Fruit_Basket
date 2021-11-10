[![Build Status](https://app.travis-ci.com/amandam2017/Fruit_Basket.svg?branch=main)](https://app.travis-ci.com/amandam2017/Fruit_Basket)
# Fruit basket

Create a `Factory Function` to manage fruit baskets.

A fruit basket contains:

* 1 type of fruit, 
* a quantity of fruit 
* and the unit price per fruit.

The Factory Function is called `FruitBasket` and should allow for the following:

* create a new fruit basket for a given fruit type, qty & fruit price,
* find all the fruit baskets for a given fruit type,
* update the number of fruits in a given basket,
* show the total price for a given fruit basket,
* show the sum of the total of the fruit baskets for a given fruit type.

A fruit baskets should be stored in PostgreSQL table called `fruit_basket`.
<!-- sudo -u postgres createdb fruit_basket; -->
<!-- sudo -u postgres createuser codex -P; -->

Create tests for your function and deploy your tests to Travis.
