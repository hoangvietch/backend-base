import { NextFunction, Request, Response } from 'express';
import config from 'config';
import Shopify, { ApiVersion, AuthQuery } from '@shopify/shopify-api';

Shopify.Context.initialize({
  API_KEY: "c2fc19d4e70f5fc37a5fe21f183ee31b",
  API_SECRET_KEY: "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",
  SCOPES: ["read_products,read_orders,unauthenticated_write_customers"],
  HOST_NAME: config.get('clientCallbackUrl'),
  IS_EMBEDDED_APP: true,
  API_VERSION: ApiVersion.April21 // all supported versions are available, as well as "unstable" and "unversioned"
});
class IndexController {

  public index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // @ts-ignore
      let authRoute = await Shopify.Auth.beginAuth(req, res, req.query.shop, '/oauth/callback', true);
      console.log('authRoute', authRoute)
      return res.redirect(authRoute);
    
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
