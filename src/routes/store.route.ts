import { Router } from 'express';
import Route from '@interfaces/routes.interface';
import StoreController from '@/controllers/store.controller';
import validationMiddleware from '@middlewares/validation.middleware';
import { CreateStoreDto, UpdateStoreDto } from '@/dtos/store.dto';
class IndexRoute implements Route {
  public path = '/stores';
  public router = Router();
  public storeController = new StoreController()

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {

    this.router.get(`${this.path}`, this.storeController.findStoreByName);
    this.router.post(`${this.path}/create`, validationMiddleware(CreateStoreDto, 'body'), this.storeController.createStore);
    this.router.put(`${this.path}/update-name`, validationMiddleware(UpdateStoreDto, 'body'), this.storeController.updateStoreByName);
    this.router.put(`${this.path}/update-id`, validationMiddleware(UpdateStoreDto, 'body'), this.storeController.updateStoreById);
  }
}

export default IndexRoute;
