import { BaseEntity } from "./../../common/config/base.entity";
import { PurchaseEntity } from "./../../purchases/entities/purchase.entity";
import {  Column, Entity, JoinColumn, ManyToOne} from "typeorm";

@Entity('customer')
export class CustomerEntity extends BaseEntity {
    @Column({ type: 'varchar' })
    customer_name: string;
    @Column({ type: 'varchar' })
    contact: string;
    @Column({ type: 'varchar' })
    adress: string;
    @Column({ type: 'varchar' })
    city: string;
    @Column({ type: 'int' })
    postal_code: number;
    @Column({ type: 'varchar' })
    country: string;

    @ManyToOne(() => PurchaseEntity, (purchase) => purchase.customer)
    @JoinColumn({name: "customer_id"})
    purchase: string;

    
}
