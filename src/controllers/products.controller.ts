import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Get()
    getProducts(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string
    ) {
        return `products: limit=> ${limit} offset=> ${offset} brand=>${brand}`
    }

    @Get('filter')
    getProductFilter() {
        return `Soy un filter`;
    }

    @Get(':productId')
    getProduct(@Param() params: any) {
        return `product ${params.productId}`;
    }
}