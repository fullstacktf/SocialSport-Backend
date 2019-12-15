import { User, IUserModel } from '../model/userModel';
import DBManager from '../../../utils/DBManager';
import PasswordManager from '../../../utils/PasswordManager';

export default class UserController {
  static async getAllUsers(): Promise<IUserModel[]> {
    await DBManager.connectDatabase();
    const users = await User.find().limit(10);
    return users;
  }

  static async getUser(userName: string): Promise<IUserModel> {
    await DBManager.connectDatabase();
    const user = await User.findOne({ username: userName });
    return user;
  }

  static async addUser(body: IUserModel): Promise<IUserModel> {
    await DBManager.connectDatabase();
    const {
      username,
      email,
      password,
      name,
      surname,
      birthDate,
      description,
      avatar
    } = body;

    const encryptedPassword = PasswordManager.encryptPassword(password);
    const user: IUserModel = new User({
      username,
      email,
      password: encryptedPassword,
      name,
      surname,
      birthDate,
      description,
      avatar
    });
    await user.save();
    return user;
  }

  static async deleteUser(userName: string): Promise<IUserModel> {
    await DBManager.connectDatabase();
    const user = await User.findOneAndDelete({ username: userName });
    return user;
  }

  static async updateUser(
    userName: string,
    body: IUserModel
  ): Promise<IUserModel> {
    await DBManager.connectDatabase();
    const user = await User.findOneAndUpdate({ username: userName }, body);
    return user;
  }
}
