import UserRepository from '../repositories/user.repository';

class UserService {
  static async getAllUsers() {
    return await UserRepository.getAllUsers();
  }

  static async createUser(email: string) {
    return await UserRepository.createUser(email);
  }

  static async deleteUser(id: string) {
    return await UserRepository.deleteUser(id);
  }
}

export default UserService;
