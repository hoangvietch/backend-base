import { CreateStoreDto } from '@dtos/store.dto';
import HttpException from '@exceptions/HttpException';
import { Store } from '@interfaces/store.interface';
import storeModel from '@models/store.model';
import { isEmpty } from '@utils/util';
import config from 'config';
import moment from 'moment';

class StoreService {
  public store = storeModel;

  public async findStoreByName(name: string): Promise<Store> {
    if (isEmpty(name)) throw new HttpException(400, "You're not name store");

    const store: Store = await this.store.findOne({ name: name }).exec();
    return store;
  }

  public async createStore(data: CreateStoreDto): Promise<Store> {
    if (isEmpty(data)) throw new HttpException(400, "You're not storeData");

    const findStore: Store = await this.findStoreByName(data.name);
    if (!findStore) {
      const dtupdate = {
        ...data,
        free_trial: true,
        exp_date: moment(new Date()).add('d', config.get('freeTrialDay')),
      };
      const createUserData: Store = await this.store.create(dtupdate);
      return createUserData;
    } else {
      throw new HttpException(400, 'Store exists');
    }
  }
  public async updateStoreByName(data): Promise<Store> {

    if (isEmpty(data)) throw new HttpException(400, 'Status must be: active or disable');
    const store: Store = await this.store.findOneAndUpdate({ name: data.name }, { status: data.status });
    return store;
  }

  public async updateStoreById(data): Promise<Store> {

    if (isEmpty(data)) throw new HttpException(400, 'Status must be: active or disable');
    const store: Store = await this.store.findByIdAndUpdate(data.id, { status: data.status });
    return store;
  }
  public async upgradePlan(id: string): Promise<Store> {
    if(isEmpty(id)) throw new HttpException(400, 'Id is not empty');
    const dataud = {
      current_plan: 'pro',
      exp_date: String(moment(new Date()).add('d', config.get('UpgradeDay')))
    }
    const store: Store = await this.store.findByIdAndUpdate(id, dataud);
    return store;
  }
}

export default StoreService;
