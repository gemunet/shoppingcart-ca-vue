const { default: Cart } = require("../entities/Cart");

class GetCartUseCase
{
  constructor(cartRepository) {
    this.cartRepository = cartRepository;
  }

  async execute(cartId) {
    let cart = this.cartRepository.get(cartId);
    if(!cart) {
      cart = new Cart()
    }
    this.cartRepository.save(cart);
    
    return cart;
  }
}

export default GetCartUseCase;