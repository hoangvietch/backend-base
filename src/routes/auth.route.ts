import { Router } from 'express';
import AuthController from '@controllers/auth.controller';
import Route from '@interfaces/routes.interface';


class AuthRoute implements Route {
  public path = '/oauth/callback';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.authController.oauth);
  }
}

export default AuthRoute;
