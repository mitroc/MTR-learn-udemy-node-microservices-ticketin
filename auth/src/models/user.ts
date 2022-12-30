import mongoose from 'mongoose';

interface UserProps {
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

const User = mongoose.model('User', userSchema);

const buildUser = (props: UserProps) => {
  return new User(props);
};

export { User, buildUser };
