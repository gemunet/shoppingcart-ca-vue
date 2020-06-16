const DOES_NOT_EXIST = -1

class CartItem
{
  constructor(product, count) {
    this.product = product;
    this.count = count;
  }

  totalPrice() {
    return parseFloat(parseFloat(this.product.price * this.count).toFixed(2));
  }
}

class Cart
{
    constructor() {
        this.id = (Math.random().toString(16)+"000000000").substr(2,8);
        this.items = []
    }

    add(product) {
      let idx = this.items.map(item => item.product.id).indexOf(product.id);
      if(idx == DOES_NOT_EXIST) {
        this.items.push(new CartItem(product, 1));
      } else {
        this.items[idx].count += 1;
      }
    }

    edit(product, count) {
      if(count < 1) {
        throw `Count ${count} invalid!`
      }

      let idx = this.items.map(item => item.product.id).indexOf(product.id);
      if(idx == DOES_NOT_EXIST) {
        throw `Item ${product.id} does not exist!`
      } else {
        this.items[idx].count = count;
      }
    }

    remove(product) {
      let idx = this.items.map(item => item.product.id).indexOf(product.id);
      if(idx != DOES_NOT_EXIST) {
        this.items.splice(idx, 1);
      }
    }
    
    getItems() {
      return this.items;
    }
}

export default Cart;