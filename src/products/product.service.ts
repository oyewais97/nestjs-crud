import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
@Injectable()
export class ProductsService {
  private product: Product[] = [];

  inserProduct(title?: string, description?: string, price?: number) {
    const proId = Math.random().toString();
    const newProduct = new Product(proId, title, description, price);
    this.product.push(newProduct);
    return proId;
  }
  getProducts() {
    return [...this.product];
  }
  getSingleProduct(productId: string) {
    const product = this.findProduct(productId)[0];
    return { ...product };
  }
  updateProduct(productId: string, title: string, desc: string, price: number) {
    const [product, index] = this.findProduct(productId);
    console.log(index);
    const updatedProduct = { ...product };
    if (title) {
      updatedProduct.title = title;
    }
    if (desc) {
      updatedProduct.description = desc;
    }
    if (price) {
      updatedProduct.price = price;
    }
    this.product[index] = updatedProduct;
  }
  private findProduct(id: string): [Product, number] {
    const productIndex = this.product.findIndex((prod) => prod.id === id);
    const product = this.product[productIndex];
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return [product, productIndex];
  }
}
