import { Injectable, NotFoundException } from '@nestjs/common';

import { Customer } from '../entities/customers.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customers.dtos';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Customer 1',
      email: 'customer234@gmail.com',
      phone: 98765678,
    },
  ];

  findAll() {
    return this.customers;
  }

  finOne(id: number) {
    const customer = this.customers.find((item) => item.id === id);
    if (!Customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    console.log(customer);
    return customer;
  }

  create(data: CreateCustomerDto) {
    this.counterId = this.counterId + 1;
    const newCustomer = {
      id: this.counterId,
      ...data,
    };
    this.customers.push(newCustomer);
    console.log(newCustomer);
    return newCustomer;
  }

  update(id: number, data: UpdateCustomerDto) {
    const customers = this.finOne(id);
    const index = this.customers.findIndex((item) => item.id === id);

    this.customers[index] = {
      ...customers,
      ...data,
    };
    console.log(customers);
    console.log(index);
    return this.customers[index];
  }

  remove(id: number) {
    const index = this.customers.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    this.customers.splice(index, 1);
    console.log(index);
    return true;
  }
}
