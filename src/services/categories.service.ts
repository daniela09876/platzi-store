import { Injectable, NotFoundException } from '@nestjs/common';

import { Category } from '../entities/categories.entity';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.dtos'

@Injectable()
export class CategoriesService {

    private counterId = 1;
    private categories: Category[] = [
        {
            id: 1,
            name: 'Category 1',
        }
    ];

    findAll() {
        return this.categories;
    }

    finOne(id: number) {
        const categoty = this.categories.find((item) => item.id === id);
        if (!Category) {
            throw new NotFoundException(`Categories #${id} not found`);
        }
        return categoty;
    }

    create(data: CreateCategoryDto) {
        this.counterId = this.counterId + 1;
        const newCategory = {
            id: this.counterId,
            ...data,
        };
        this.categories.push(newCategory);
        return newCategory;
    }

    update(id: number, data: UpdateCategoryDto) {
        const categories = this.finOne(id);
        const index = this.categories.findIndex((item) => item.id === id)

        this.categories[index] = {
            ...categories,
            ...data,
        }
        return this.categories[index];
    }

    remove(id: number) {
        const index = this.categories.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new NotFoundException(`Categories #${id} not found`);
        }
        this.categories.splice(index, 1);
        return true;
    }
}
