import { NextFunction, Request, Response } from 'express';
import Jwt, { decode } from 'jsonwebtoken';
import config from 'config';
import StoreService from '@/services/store.service';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const url = req.originalUrl;
    if (url.indexOf('stores') > 0) {
      const authorization = req.get('Authorization');
      const jwt = authorization.split(' ')[1];
      const decoded = await Jwt.verify(jwt, config.get('secretKeyJwt'));
      if (!!decoded) next();
    } else {
      const storeService = new StoreService();
      const authorization = req.get('Authorization');
      const jwt = authorization.split(' ')[1];
      const decoded = await Jwt.verify(jwt, config.get('secretKey'));

      const nowInSeconds = Date.now() / 1000;

      // @ts-ignore
      if (nowInSeconds <= decoded.nbf || nowInSeconds >= decoded.exp) {
        throw 'Invalid JWT';
      }

      // @ts-ignore
      if (config.get('apiKey') !== decoded.aud) {
        throw 'Invalid JWT';
      }
      // @ts-ignore
      const { hostname: destinationHostname } = new URL(decoded.dest);

      const store = await storeService.findStoreByName(destinationHostname);

      if (!store) {
        throw 'Store Not Found';
      }
      // @ts-ignore
      req.__store = store;
      next();
    }
  } catch (error) {
    res.status(403).json(error);
  }
};

export default authMiddleware;
