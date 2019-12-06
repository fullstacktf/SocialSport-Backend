import { Router, Response, Request } from 'express';
import UserController from '../controller/userController';
import { IUserModel } from '../model/userModel';
const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  UserController.getAllUsers()
    .then((users: IUserModel[]) => {
      res.status(200).json(users);
    })
    .catch((err: Error) => {
      throw new Error(`Error trying to get all users : ${err}`);
    });
});

router.get('/:username', (req: Request, res: Response) => {
  UserController.getUser(req.params.username)
    .then((user: IUserModel) => {
      res.status(200).json(user);
    })
    .catch((err: Error) => {
      throw new Error(`Error trying to get one user : ${err}`);
    });
});

router.post('/', (req: Request, res: Response) => {
  UserController.addUser(req.body)
    .then((user: IUserModel) => {
      return res.status(200).json(user);
    })
    .catch((err: Error) => {
      throw new Error(`Error trying to add user : ${err}`);
    });
});

router.put('/:username', (req: Request, res: Response) => {
  UserController.updateUser(req.params.username, req.body)
    .then((user: IUserModel) => {
      return res.status(200).json(user);
    })
    .catch((err: Error) => {
      throw new Error(`Error trying to update user : ${err}`);
    });
});

router.delete('/:username', (req: Request, res: Response) => {
  UserController.deleteUser(req.params.username)
    .then((user: IUserModel) => {
      return res.status(200).json(user);
    })
    .catch((err: Error) => {
      throw new Error(`Error trying to delete user : ${err}`);
    });
});

export default router;
