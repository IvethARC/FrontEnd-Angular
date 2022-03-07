export class Product {
    id: number;
    name: string;
    price: number;
    amount: number;
    information: string;
    image_url: string;

    constructor(id, name, price=0, amount=0, information='', image_url='https://reygo.odoo.com/web/image/product.template/2595/image_256/Vaso%20Bamb%C3%BA%204%20oz.%20?unique=617d761'){
        this.id = id
        this.name = name
        this.price = price
        this.amount= amount
        this.information = information
        this.image_url = image_url

    }    

}
