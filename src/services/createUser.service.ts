import AppDataSource from "../data-source";
import { IUserRequest, IUserResponse } from "../interfaces/users";
import { User } from "../entities/user.entity";
import { userWithoutPasswordSerializer } from "../serializers/user.serializer";
import { AppError } from "../error/AppError";

const createUserService = async (
  userData: IUserRequest
): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({
    email: userData.email,
  });
  if (findUser !== null) {
    throw new AppError("User or password invalid", 400);
  }
  const createUser = userRepository.create(userData);
  await userRepository.save(createUser);

  const userWithoutPassword = await userWithoutPasswordSerializer.validate(
    createUser,
    { stripUnknown: true }
  );

  return userWithoutPassword;
};
export default createUserService;
