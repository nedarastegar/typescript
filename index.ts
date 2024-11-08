//delete-create-edi-read

type Tproduct = {
id:number;
title:string;
description:string;
price:number;
};

type ProductDto = {
    
    title:string;
    description:string;
    price:number;
    };

type FilterProduct = {
    id?:number;
    title?:string;
    description?:string;
    price?:number;
    };

interface Iproduct {
    create(data:ProductDto):void;
    delete(id:number):string;
    read(filter:FilterProduct):Tproduct[];
    update(id:number,product:ProductDto):void;
    };


class Product implements Iproduct {
    create(data: ProductDto): void {
        throw new Error("Method not implemented.");
    }
    delete(id: number): string {
        throw new Error("Method not implemented.");
    }
    read(filter: FilterProduct): Tproduct[] {
        throw new Error("Method not implemented.");
    }
    update(id: number, product: ProductDto): void {
        throw new Error("Method not implemented.");
    }

}
