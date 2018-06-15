import { BaseEntity } from "./baseEntity";

export class TransactionEntity extends BaseEntity
{
    date:Date;
    amount: number;
    currency:string;
    payeeId:string;
    memo:string;
    categoryId:string;

}

export enum TransactionStatusEnum
{
    UNKNOWN=0,
    NONE=1,
    VOID=2,
    CLEAR=3,
    POSTED=4,
    RECONCILED=5
}
