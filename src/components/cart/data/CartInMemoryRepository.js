import ICartRepository from "../domain/ICartRepository"

const DOES_NOT_EXIST = -1

class CartInMemoryRepository extends ICartRepository
{
  constructor() {
    super();
    this.carts = [];
  }

  get(id) {
    let idx = this.carts.map(item => item.id).indexOf(id);
    if(idx == DOES_NOT_EXIST) {
      return null;
    } else {
      return this.carts[idx];
    }
  }

  save(cart) {
    let idx = this.carts.map(item => item.id).indexOf(cart.id);
    if(idx == DOES_NOT_EXIST) {
      this.carts.push(cart);
    } else {
      this.carts[idx] = cart;
    }
  }
}

export default CartInMemoryRepository;