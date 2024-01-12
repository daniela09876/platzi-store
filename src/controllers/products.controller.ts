import {
    Controller,
    Get,
    Param,
    Query,
    Post,
    Body,
    Put,
    Delete,
    HttpCode,
    HttpStatus,
    Res,
} from '@nestjs/common';

import { Response, response } from 'express';

@Controller('products')
export class ProductsController {

    @Get()
    getProducts(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string
    ) {
        return {
            message: `products: limit=> ${limit} offset=> ${offset} brand=>${brand}`
        }
    }

    @Get('filter')
    getProductFilter() {
        return {
            message: `Soy un filter`
        };
    }

    @Get(':productId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(@Res() response: Response, @Param('productId') productId: string) {
        response.status(200).send({
            message: `product ${productId}`
        });
    }

    @Post()
    create(@Body() payload: any) {
        return {
            message: 'accion de crear',
            payload,
        };
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: any) {
        return {
            id,
            payload
        };
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return {
            id
        };
    }
}