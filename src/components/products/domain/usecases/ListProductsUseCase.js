import IProductsRepository from "./../IProductsRepository"

class ListProductsUseCase
{
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(filter) {
        //TODO: Clean Architecture - aqui deberia retorna DS y no Product
        //La entidad solo debe ser visible entre el caso de uso y el repositorio
        //el caso de uso funciona como una api o servicio, donde recibe un pojo y retorna un pojo (no la entidad)
        return await this.productsRepository.search(filter);
    }
}

export {ListProductsUseCase as default, IProductsRepository}