import { sign } from 'jsonwebtoken';

const SECRET = 'SECRET';

const generateToken = async (username: string, password: string): Promise<string> => {
  const token = sign({ username, password }, SECRET, { algorithm: 'HS256' });

  return token;
};

export default generateToken;