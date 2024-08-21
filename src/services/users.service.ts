import { Injectable, NotFoundException } from "@nestjs/common";

import { User } from "../entities/users.entity";
import { CreateUserDto, UpdateUserDto } from "../dtos/users.dtos";

@Injectable()
export class UsersService {
	private counterId = 1;
	private users: User[] = [
		{
			id: 1,
			email: "users123@gmail.com",
			password: "user123",
			role: "user",
		},
	];

	findAll() {
		return this.users;
	}

	finOne(id: number) {
		const users = this.users.find((item) => item.id === id);
		if (!User) {
			throw new NotFoundException(`Users #${id} not found`);
		}
		return users;
	}

	create(data: CreateUserDto) {
		this.counterId = this.counterId + 1;
		const newUser = {
			id: this.counterId,
			...data,
		};
		this.users.push(newUser);
		return newUser;
	}

	update(id: number, data: UpdateUserDto) {
		const user = this.finOne(id);
		const index = this.users.findIndex((item) => item.id === id);

		this.users[index] = {
			...user,
			...data,
		};
		return this.users[index];
	}

	remove(id: number) {
		const index = this.users.findIndex((item) => item.id === id);
		if (index === -1) {
			throw new NotFoundException(`Users #${id} not found`);
		}
		this.users.splice(index, 1);
		return true;
	}
}
