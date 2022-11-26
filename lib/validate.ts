import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from './prisma';

interface IToken {
  id: number;
}

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { TRAX_ACCESS_TOKEN: token } = req.cookies;
    if (token) {
      // eslint-disable-next-line prettier/prettier
      const { id } = jwt.verify(token, 'hello') as IToken;
      let user;
      try {
        user = await prisma.user.findUnique({
          where: {
            id
          }
        });

        if (!user) {
          res.status(401);
          res.json({ error: 'Unauthorized' });
          return;
        }
      } catch (error) {
        res.status(401);
        res.json({ error: 'Unauthorized' });
      }
      return handler(req, res, user);
    }
    res.status(401);
    res.json({ error: 'Unauthorized' });
  };
};

export const validateToken = (token) => {
  const user = jwt.verify(token, 'hello');
  return user;
};
