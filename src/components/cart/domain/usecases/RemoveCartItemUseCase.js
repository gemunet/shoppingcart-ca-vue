class RemoveFromCartUseCase
{
  constructor(cartRepository) {
    this.cartRepository = cartRepository;
  }

  async execute(cart, product) {
    let entity = this.cartRepository.get(cart.id);
    if(!entity) {
      throw `Cart ${cart.id} not found`;
    }

    entity.remove(product);
    this.cartRepository.save(entity);

    return entity
  }
}

export default RemoveFromCartUseCase;