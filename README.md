# DDD Demo NodeJs  

This Demo use the following services: 
- accounting: use NATS messaging system and postgres database
- billing: use NATS messaging system and postgres database
- ordering: use NATS messaging system and postgres database
- products: use mongodb database

Run the following commands:
$ yarn
$ docker-compose up -d

Test GraphQL products:
http://localhost:3000/products

with the following query:
query {
  products {
    id
    name
    price
    amount
  }
}

Test Mongo Express:
http://localhost:8081/db/default/

