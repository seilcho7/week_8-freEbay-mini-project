create table users (
    id serial primary key,
    first_name varchar(100),
    last_name varchar(100),
    email varchar(500),
    password varchar(500)
);

create table items (
    id serial primary key,
    name varchar(200),
    price integer,
    image varchar(5000)
);

create table purchases (
    id serial primary key,
    user_id integer references users(id),
    item_id integer references items(id)
);

create table sells (
    id serial primary key,
    user_id integer references users(id),
    item_id integer references items(id)
);