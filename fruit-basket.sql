create table fruit_basket ( 
  id serial not null primary key,
  fruit_name text, 
  quantity int, 
  price decimal (10,2)
);

-- DELETE * FROM cars WHERE color = 'orange' AND mileage > 150000;

-- INSERT INTO fruit_basket (fruit_name, quantity, price) VALUES('Banana', 2, 3.00);
-- INSERT INTO fruit_basket (fruit_name, quantity, price) VALUES('Apple', 1, 2.00);
-- INSERT INTO fruit_basket (fruit_name, quantity, price) VALUES('Kiwi', 1, 5.50);