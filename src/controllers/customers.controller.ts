import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import { CustomersService } from '../services/customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customers.dtos';

@Controller('customer')
export class CustomerController {
  constructor(private custumersService: CustomersService) {}

  @Get()
  findAll() {
    return this.custumersService.findAll();
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.custumersService.finOne(id);
  }

  @Post()
  create(@Body() payload: CreateCustomerDto) {
    return this.custumersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateCustomerDto) {
    return this.custumersService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.custumersService.remove(+id);
  }
}
