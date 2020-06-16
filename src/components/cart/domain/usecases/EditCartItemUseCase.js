class EditCartItemUseCase
{
  constructor(cartRepository) {
    this.cartRepository = cartRepository;
  }

  async execute(cart, product, count) {
    let entity = this.cartRepository.get(cart.id);
    if(!entity) {
      throw `Cart ${cart.id} not found`;
    }

    entity.edit(product, count);
    this.cartRepository.save(entity);

    return entity
  }
}

export default EditCartItemUseCase;