import { model, Schema, Document } from 'mongoose';
import { Store } from '@interfaces/store.interface';

const schema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  accessToken: {
    type: String,
    required: true
  },
  scope: String,
  free_trial: {
    type: Boolean,
    default: true
  },
  exp_date: Date,
  current_plan: {
    type: String,
    default: 'pro',
    enum: ['free','pro'], 
  },
  status: {
    type: String,
    default: 'active',
    enum: ['disable','active'], 
  }
}, {
  timestamps: true
})

const storeModel = model<Store & Document>('Store', schema);

export default storeModel
