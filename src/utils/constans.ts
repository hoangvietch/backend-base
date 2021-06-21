import ShopifyOAuth from 'shopify-node-oauth';
import config from 'config';

export const shopifyOAuth = new ShopifyOAuth({
    apiKey: config.get('shopifyApiKey'),
    apiSecret: config.get('shopifyApiSecret'),
    clientCallbackURL: config.get('clientCallbackUrl'),
  });

