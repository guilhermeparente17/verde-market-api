import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ProductsModule } from './modules/products/products.module';
import { FavoritiesModule } from './modules/favorities/favorities.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, CategoriesModule, ProductsModule, FavoritiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
