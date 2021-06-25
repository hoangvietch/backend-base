import { CreateStoreDto } from '@dtos/store.dto';
import HttpException from '@exceptions/HttpException';
import { Store } from '@interfaces/store.interface';
import storeModel from '@models/store.model';
import { isEmpty } from '@utils/util';

class StoreService {
  public store = storeModel;

  public async findStoreByName(name: string): Promise<Store> {
    if (isEmpty(name)) throw new HttpException(400, "You're not name store");

    const store: Store = await this.store.findOne({ name: name }).exec();
    return store;
  }

  public async createStore(data: CreateStoreDto): Promise<Store> {
    if (isEmpty(data)) throw new HttpException(400, "You're not storeData");

    const findStore: Store = await this.store.findOne({ name: data.name });
    if (findStore) throw new HttpException(409, `Store ${data.name} already exists`);

    const createUserData: Store = await this.store.create(data);

    return createUserData;
  }
  public async updateStoreByName(data): Promise<Store> {
    if (isEmpty(data)) throw new HttpException(400, 'Status must be: active or disable');
    const store: Store = await this.store.findOneAndUpdate({ name: data.name}, { status: data.status });
    return store;
  }

  public async updateStoreById(data): Promise<Store> {
    console.log('data------------', data)
    if (isEmpty(data)) throw new HttpException(400, 'Status must be: active or disable');
    const store: Store = await this.store.findByIdAndUpdate(data.id, { status: data.status });
    return store;
  }
}

export default StoreService;
