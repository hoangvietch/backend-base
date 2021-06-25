import { Router } from 'express';
import Route from '@interfaces/routes.interface';

class IndexRoute implements Route {
  public path = '/';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
        // @ts-ignore

    this.router.get(`${this.path}`, (req: Request,res: Response) => res.send('Hello guys'));
  }
}

export default IndexRoute;
