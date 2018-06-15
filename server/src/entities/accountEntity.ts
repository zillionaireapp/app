import { BaseEntity } from "./baseEntity";

export class AccountEntity extends BaseEntity {
    name: string;
    description: string;
    currency: string;
    logo: string;

}