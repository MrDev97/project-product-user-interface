import { Product } from '../interfaces/product.interface';
import { ProductsRepository } from './products-repository.interface';
import shortid from 'shortid';


export class ProductsMockRepository implements ProductsRepository {
    private products: Array<Product> = [];
    addItem(item: Product): Product {
        item.id = shortid.generate();
        item.createdAt = new Date();
        item.updatedAt = new Date();
        this.products.push(item);
        return item;
    }
    updateItem(id: string, item: Product): Product {
        this.products = this.products.map(i => {
            if (i.id === id) {
                return {
                    ...item,
                    id: i.id,
                    createdAt: i.createdAt,
                    updatedAt: new Date()
                };
            }
            return i;
        });
        return this.getItemById(id);
    }
    deleteItem(id: string): boolean {
        this.products.filter((i) => i.id === id); 
        return false;
    }
    getItemById(id: string): Product {
        return this.products.find(i => i.id === id);
    }
    findProductByName(name: string): Product {
        return this.products.find(i => i.name === name);
    }
    getAllItems(): Product[] {
        return this.products;
    }
 }