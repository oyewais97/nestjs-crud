import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/product.controller';
import { ProductModule } from './products/product.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [ProductModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
