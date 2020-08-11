//import Knex from 'knex';
import { Db } from 'mongodb';

import { ProductsManagementService } from '~app/domain/services/ProductsManagement.service';
import { Product } from '~app/domain/entities/Product.ent';

export class ProductsManagementServiceRepository extends ProductsManagementService {
  //constructor(database: Knex) {
    constructor(database: Promise<Db>) {
    super(database);
  }

  async getOneProduct(productId: string) {
    const client = await this.database;
    //const fromDb = await this.database('product').where({ id: productId }).select().first();
    const fromDb = await client.collection('product').findOne({ id: productId });
    return new Product(fromDb);
  }

  async getAllProducts() {
    const client = await this.database;
    //const productsFromDb = await this.database('product').select();
    const productsFromDb = await client.collection('product').find().toArray();
    return productsFromDb.map((p) => new Product(p));
  }

  async updateProduct(product: Product) {
    const client = await this.database;
    //await this.database('product').where({ id: product.id }).update({
    console.log('updated!!!');
    await client.collection('product').update(
      { id: product.id },  
      {
        $set: { 
        id: product.id,
        amount: product.amount,
        price: product.price,
        name: product.name,
        }, 
      } 
    );
    return { hasUpdated: true };
  }
}
