class AddToCartUseCase
{
  constructor(cartRepository) {
    this.cartRepository = cartRepository;
  }

  async execute(cart, product) {
    let entity = this.cartRepository.get(cart.id);
    if(!entity) {
      throw `Cart ${cart.id} not found`;
    }

    entity.add(product);
    this.cartRepository.save(entity);

    return entity
  }
}

export default AddToCartUseCase;