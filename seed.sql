insert into users
    (first_name, last_name, email, password)
VALUES 
    ('Seil', 'Cho', 'seilcho7@hotmail.com', 'sc1234'),
    ('Paul', 'Garg', 'pg123@gmail.com', 'pg1234'),
    ('Chris', 'Garcia', 'cg999@yahoo.com', 'cg1234')
;

insert into items
    (name, price, image)
VALUES
    ('Soap', 2, 'https://cdn.shopify.com/s/files/1/0223/7461/products/B18BAR-SG-OPV3.png?v=1540480408'),
    ('Milk', 4, 'https://cdn.shopify.com/s/files/1/1078/0310/products/milk-broguiere-s-2-reduced-fat-milk-1_1024x1024.jpg?v=1500710707'),
    ('Candy', 10, 'https://cdn11.bigcommerce.com/s-90c91/images/stencil/1280x1280/products/3239/7490/Trump_-_Front_-_CSBCHC__35577.1515769599.jpg?c=2&imbypass=on')
;

insert into purchases
    (user_id, item_id)
VALUES
    (1, 1),
    (1, 2),
    (1, 3),
    (2, 1),
    (3, 2)
;