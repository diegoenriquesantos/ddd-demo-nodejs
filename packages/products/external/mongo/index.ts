import { MongoClient, Db} from 'mongodb';

const url = `mongodb://admin:admin@${process.env.MONGO_IP}:${process.env.MONGO_PORT}`;

const client = new MongoClient(url);

console.log('mongo database is connected (external layer)');
export const mongo = client
    .connect()
    .then((connection) => connection.db('default'))
    .catch((err) => console.log('Error connecting to mongo database', err)) as Promise<Db>;