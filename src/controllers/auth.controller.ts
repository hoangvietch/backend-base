// @ts-nocheck
import { NextFunction, Request, Response } from 'express';
import Shopify, { ApiVersion, AuthQuery } from '@shopify/shopify-api';

class AuthController {
  
  public oauth = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('req.query', req.query, req.host)

      await Shopify.Auth.validateAuthCallback(req, res, req.query as unknown as AuthQuery); // req.query must be cast to unkown and then AuthQuery in order to be accepted
      await Shopify.Utils.loadCurrentSession(req, res, req.isOnline);


    } catch (error) {
      console.error(error); // in practice these should be handled more gracefully
    }
    console.log('{ ...req }: ', req.hostname)
    return res.redirect('https://viet2b.myshopify.com/admin/apps/mercel'); // wherever you want your user to end up after OAuth completes
  };

}

export default AuthController;
