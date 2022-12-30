import mongoose from 'mongoose';
import { Password } from '../services/password';

// Interface for new User
interface UserProps {
  email: string;
  password: string;
}

// Interface for new User Model
interface UserModel extends mongoose.Model<UserDocument> {
  build(props: UserProps): UserDocument;
}

// Interface for User Document
interface UserDocument extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

userSchema.statics.build = (props: UserProps) => {
  return new User(props);
};

const User = mongoose.model<UserDocument, UserModel>('User', userSchema);

export { User };
