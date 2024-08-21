"use strict";
var __decorate =
	(this && this.__decorate) ||
	function (decorators, target, key, desc) {
		var c = arguments.length,
			r =
				c < 3
					? target
					: desc === null
						? (desc = Object.getOwnPropertyDescriptor(target, key))
						: desc,
			d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
			r = Reflect.decorate(decorators, target, key, desc);
		else
			for (var i = decorators.length - 1; i >= 0; i--)
				if ((d = decorators[i]))
					r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const customers_entity_1 = require("../entities/customers.entity");
let CustomersService = class CustomersService {
	constructor() {
		this.counterId = 1;
		this.customers = [
			{
				id: 1,
				name: "Customer 1",
				email: "customer234@gmail.com",
				phone: 98765678,
			},
		];
	}
	findAll() {
		return this.customers;
	}
	finOne(id) {
		const customer = this.customers.find((item) => item.id === id);
		if (!customers_entity_1.Customer) {
			throw new common_1.NotFoundException(`Customer #${id} not found`);
		}
		return customer;
	}
	create(data) {
		this.counterId = this.counterId + 1;
		const newCustomer = Object.assign({ id: this.counterId }, data);
		this.customers.push(newCustomer);
		return newCustomer;
	}
	update(id, data) {
		const customers = this.finOne(id);
		const index = this.customers.findIndex((item) => item.id === id);
		this.customers[index] = Object.assign(Object.assign({}, customers), data);
		return this.customers[index];
	}
	remove(id) {
		const index = this.customers.findIndex((item) => item.id === id);
		if (index === -1) {
			throw new common_1.NotFoundException(`Customer #${id} not found`);
		}
		this.customers.splice(index, 1);
		console.log(index);
		return true;
	}
};
exports.CustomersService = CustomersService;
exports.CustomersService = CustomersService = __decorate(
	[(0, common_1.Injectable)()],
	CustomersService,
);
