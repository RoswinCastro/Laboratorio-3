import { IsNotEmpty, IsNumber, IsString } from "class-validator";
export class CreateCustomerDto {
    @IsString()
    @IsNotEmpty()
    customer_name: string

    @IsString()
    @IsNotEmpty()
    contact: string

    @IsString()
    @IsNotEmpty()
    adress: string

    @IsString()
    @IsNotEmpty()
    city: string

    @IsNumber()
    @IsNotEmpty()
    postal_code: number

    @IsString()
    @IsNotEmpty()
    country: string
}
