import { model, Schema, Document } from 'mongoose';
import { User } from '@/interfaces/user.interface';

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  first_name: {
    type: String  
  },
  last_name: {
    type: String
  },
  country: String,
 address_country: String,
 address_city: String,
 address_line1: String,
 address_line2: String,
 address_state: String,
 address_zip: String
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;
