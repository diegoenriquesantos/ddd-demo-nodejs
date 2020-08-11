import { Db } from 'mongodb';
import casual from 'casual';
import * as uuid from 'uuid';

const productsArray = new Array(100).fill(null).map(() => {
    return {
        id: uuid.v1(),
        name: casual.title,
        price: casual.double(1, 20),
        amount: casual.integer(1, 10),
      };
});

export async function firstMigration(db: Db) {
    await db.createCollection('product');
    await db.collection('product').insertMany(productsArray);
};
