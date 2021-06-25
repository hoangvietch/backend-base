import { Request, Response } from 'express';
import { CreateStoreDto } from '@dtos/store.dto';
import { Store } from '@interfaces/store.interface';
import StoreService from '@services/store.service';

class StoreController {
  public storeService = new StoreService();

  public findStoreByName = async (req: Request, res: Response) => {
    try {
      const { name }: any = req.query
      const store: Store = await this.storeService.findStoreByName(name);
      res.status(200).json(store);
    } catch (error) {
      console.log(error)
    }
  };
  
  public createStore = async (req: Request, res: Response) => {
    try {
      const data: CreateStoreDto = req.body;
      const createStoreData: Store = await this.storeService.createStore(data);

      res.status(201).json({ data: createStoreData, message: 'created' });
    } catch (error) {
      console.log(error)
    }
  };

  public updateStoreByName = async (req: Request, res: Response) => {
    try {
      const data = req.body
      console.log('update by namne', data)
      const store: Store = await this.storeService.updateStoreByName(data);
      res.status(200).json(store);
    } catch (error) {
      console.log(error)
    }
  };

  public updateStoreById = async (req: Request, res: Response) => {
    try {
      const data = req.body
      console.log('2', data)
      const store: Store = await this.storeService.updateStoreById(data);
      res.status(200).json(store);
    } catch (error) {
      console.log(error)
    }
  };

}

const storeController = new StoreController();
export default StoreController;
export { storeController };
