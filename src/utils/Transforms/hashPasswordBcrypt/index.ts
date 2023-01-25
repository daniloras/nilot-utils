import { hashSync } from 'bcrypt';

const hashPasswordBcrypt = {
  to: (password: string): string => hashSync(password, 10),
  from: (hash: string): string => hash,
  convertPassword: (password: string): string => {
    return hashSync(password, 10);
  },
};

export default hashPasswordBcrypt;
