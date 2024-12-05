import  User  from '../models/user.model';

class UserRepository {
  static findUserById(id: string) {
    throw new Error('Method not implemented.');
  }
  static async getAllUsers() {
    return await User.findAll();
  }

  static async getUserById(id: string) {
    return await User.findByPk(id);
  }

  static async createUser(email: string) {
    return await User.create({ email });
  }

  static async deleteUser(id: string) {
    return await User.destroy({ where: { id } });
  }

  static async getUserByEmail(email: string) {
    return await User.findOne({ where: { email } });
  }
}

export default UserRepository;
