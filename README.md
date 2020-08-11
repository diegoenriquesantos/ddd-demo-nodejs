# DDD Demo NodeJs  

This Demo use the following services: 
- accounting: use NATS messaging system and postgres database
- billing: use NATS messaging system and postgres database
- ordering: use NATS messaging system and postgres database
- products: use mongodb database

Run the following commands: <br />
`$ yarn`<br />
`$ docker-compose up -d`<br />

Test GraphQL products:

http://localhost:3000/products <br />

with the following query: <br />
`query {
  products {
    id
    name
    price
    amount
  }
}`

Test Mongo Express: <br />
http://localhost:8081/db/default/

