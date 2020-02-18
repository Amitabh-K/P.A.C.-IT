-- remove databases if exists
DROP DATABASE IF EXISTS pacit_db;
-- create teh table
CREATE DATABASE pacit_db;

-- drop tables
use pacit_db;
drop table cartitems;
drop table carts;

use pacit_db;
drop table products;
drop table departments;