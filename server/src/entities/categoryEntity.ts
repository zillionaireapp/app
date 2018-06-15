export class CategoryEntity
{
    type:CategoryTypeEnum;
    name:string;
    code:string;
    status:number;

}


export enum CategoryTypeEnum
{
    PERSONAL=1,
    BUSINESS=2
}