import { v4 } from "uuid";
export abstract class Counters {
    static GlobalCounter: number = 0;
    protected innerCounter: number = 0

    constructor(
        protected name: string,
        public getResponsable = (): string => this.name,
        public getPrivateCount = (): number => this.innerCounter,
        public getGlobalCounter = (): number => Counters.GlobalCounter,
        public count = (): { private: number, public: number } => {
            this.innerCounter++
            Counters.GlobalCounter++
            return { private: this.innerCounter, public: Counters.GlobalCounter }
        }
    ) { }
}

export class Product {
    constructor(
       public  title: string,
       public description: string,
       public price: number,
       public thumbnail: string,
       public code: number,
       public stock: number,

    ) { }
}
export  class ProductManager {
    static lastId:number=0
    constructor(
        protected products:Product[],
        protected idGen=():number=>{
            ProductManager.lastId++
            return ProductManager.lastId
        },
        public addProduct=(data:Omit<Product,"code">):void=>{
            Object.keys(data).forEach(key=>{
                if (!data[key as keyof Omit<Product,"code">]) throw new Error(`The field ${key} is required`)
            })
            this.products.push({...data,code:idGen()})
        },
        public getProducts=():Product[]=>{
            console.log(this.products)
            return this.products
        },
        public getProductById=(id:number):Product=>{
            const item= this.products.find(product=>product.code===id)
            if (item !==undefined) return item
            else throw new Error("Item dont found")
        }


    ) { }
}