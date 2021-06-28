import { NextFunction, Request, Response } from 'express';
import { CreateStoreDto } from '@dtos/store.dto';
import { Store } from '@interfaces/store.interface';
import StoreService from '@services/store.service';
import httpStatus from 'http-status-codes';

class StoreController {
  public storeService = new StoreService();

  public findStoreByName = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name }: any = req.query;
      const store: Store = await this.storeService.findStoreByName(name);
      res.status(httpStatus.OK).json(store);
    } catch (error) {
      next(error);
    }
  };

  public createStore = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: CreateStoreDto = req.body;
      await this.storeService.createStore(data);

      res.status(httpStatus.CREATED).json({ message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateStoreByName = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      await this.storeService.updateStoreByName(data);
      res.status(httpStatus.ACCEPTED).json({ message: 'Updated' });
    } catch (error) {
      next(error);
    }
  };

  public updateStoreById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      await this.storeService.updateStoreById(data);
      res.status(httpStatus.ACCEPTED).json({ message: 'Updated' });
    } catch (error) {
      next(error);
    }
  };

  public upgradePlan = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { _id } = req.body;
      await this.storeService.upgradePlan(_id);
      res.status(httpStatus.ACCEPTED).json({ message: 'Upgrade to plan pro succeeded' });
    } catch (error) {
      next(error);
    }
  };
}

const storeController = new StoreController();
export default StoreController;
export { storeController };
