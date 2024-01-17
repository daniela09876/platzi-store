import { IsString, IsNotEmpty, IsNumber, IsEmail } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCustomerDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsEmail()
    readonly email: string;

    @IsNumber()
    @IsNotEmpty()
    readonly phone: number;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) { }