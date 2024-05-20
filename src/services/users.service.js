"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_entity_1 = require("../entities/users.entity");
let UsersService = class UsersService {
    constructor() {
        this.counterId = 1;
        this.users = [
            {
                id: 1,
                email: 'users123@gmail.com',
                password: 'user123',
                role: 'user',
            },
        ];
    }
    findAll() {
        return this.users;
    }
    finOne(id) {
        const users = this.users.find((item) => item.id === id);
        if (!users_entity_1.User) {
            throw new common_1.NotFoundException(`Users #${id} not found`);
        }
        return users;
    }
    create(data) {
        this.counterId = this.counterId + 1;
        const newUser = Object.assign({ id: this.counterId }, data);
        this.users.push(newUser);
        return newUser;
    }
    update(id, data) {
        const user = this.finOne(id);
        const index = this.users.findIndex((item) => item.id === id);
        this.users[index] = Object.assign(Object.assign({}, user), data);
        return this.users[index];
    }
    remove(id) {
        const index = this.users.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Users #${id} not found`);
        }
        this.users.splice(index, 1);
        return true;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
