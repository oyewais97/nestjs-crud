import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './product.service';
@Controller('products')
export class ProductsController {
  constructor(private readonly productservice: ProductsService) {}

  @Get('test')
  test() {
    return 'Hello';
  }

  @Post('yes')
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const generatedId = this.productservice.inserProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: generatedId };
  }
  @Get('yes1')
  getAllProducts() {
    return this.productservice.getProducts();
  }
  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productservice.getSingleProduct(prodId);
  }
  @Patch(':id')
  updateProduct(
    @Param('id') proId: string,
    @Body() proTitle: string,
    @Body() prodDes: string,
    @Body() prodPrice: number,
  ) {
    this.productservice.updateProduct(proId, proTitle, prodDes, prodPrice);
  }
}
