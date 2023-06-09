import { ProductManager } from "../entities/utility.clases";

const productManager=new ProductManager([])

productManager.addProduct({description:"Algo",price:14,stock:22,thumbnail:"http://placehold.it/",title:"SomeTitle"})
productManager.addProduct({description:"Otro",price:22,stock:11,thumbnail:"http://placehold.it/",title:"SomeTitle"})
console.log(productManager.getProducts())
console.log(productManager.getProductById(2))