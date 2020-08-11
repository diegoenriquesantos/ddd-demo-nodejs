//import Knex from 'knex';
import { Db } from 'mongodb';

import { Product } from '../entities/Product.ent';

export abstract class ProductsManagementService {
  //constructor(protected database: Knex) {}
  constructor(protected database: Promise<Db>) {}
  abstract async getOneProduct(productId: string): Promise<Product | Error>;
  abstract async getAllProducts(): Promise<Product[] | Error>;
  abstract async updateProduct(product: Product): Promise<{ hasUpdated: boolean } | Error>;
}
