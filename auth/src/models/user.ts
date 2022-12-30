import mongoose from 'mongoose';

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
userSchema.statics.build = (props: UserProps) => {
  return new User(props);
};

const User = mongoose.model<UserDocument, UserModel>('User', userSchema);

export { User };
