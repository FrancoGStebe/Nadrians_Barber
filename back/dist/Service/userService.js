"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByCredentialId = exports.createUserService = exports.getUserByidService = exports.getAllUsersService = void 0;
const credentialService_1 = require("./credentialService");
const repositori_1 = require("../repositori");
const getAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUser = yield repositori_1.UserRepositori.find({
        relations: ["turns"]
    });
    return allUser;
});
exports.getAllUsersService = getAllUsersService;
// export const getUserByidService = async (id: number): Promise<User | null> => {
//   console.log(id);
//   const user: User | null = await UserRepositori.findOne({
//     where: { id },
//     relations: ["turns"],
//   });
//   if (!user) throw new Error("Usuario no encontrado");
//   return user;
// };
const getUserByidService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield repositori_1.UserRepositori.findOne({
        where: { id },
        relations: ["turns"],
    });
    return user;
});
exports.getUserByidService = getUserByidService;
const createUserService = (createUserDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = yield (0, credentialService_1.createCredential)({
        username: createUserDto.username,
        password: createUserDto.password,
    });
    const newUser = repositori_1.UserRepositori.create(createUserDto);
    newUser.Credential = newCredential;
    yield repositori_1.UserRepositori.save(newUser);
    return newUser;
});
exports.createUserService = createUserService;
const findUserByCredentialId = (credentialId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield repositori_1.UserRepositori.findOneBy({
        Credential: { id: credentialId }
    });
    if (!user)
        throw new Error("Usuario no encontrado");
    return user;
});
exports.findUserByCredentialId = findUserByCredentialId;
