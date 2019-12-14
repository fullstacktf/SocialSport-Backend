import { Request, Response } from 'express';
// import jwt from 'jsonwebtoken';
// import config from '../config/config';

/**
 * Verifica que un usuario está logueado y si dispone de un token
 * válido al realizar la petición
 * @param req
 * @param res
 * @param next
 */
export const verifyJWT = (req: Request, res: Response): Response => {
  if (!req.headers.authorization) return res.status(401);
};

// const token: string = req.headers.authorization.split(' ')[1];
// let jwtPayload;

//   //Try to validate the token and get data
//   try {
//     jwtPayload = jwt.verify(token, config.jwtSecret);
//     res.locals.jwtPayload = jwtPayload;
//   } catch (error) {
//     res.status(401).send();
//     return;
//   }

//   //The token is valid for 1 hour
//   //We want to send a new token on every request
//   const { userId, username } = jwtPayload;
//   const newToken = jwt.sign({ userId, username }, config.jwtSecret, {
//     expiresIn: '1h'
//   });
//   res.setHeader('token', newToken);

//   //Call the next middleware or controller
//   next();
// };
