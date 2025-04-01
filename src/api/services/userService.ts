import {User} from "@types";

const users: User[] = [];

export const getAllUsers = async () => {
    return users;
};

export const createUser = async (user: User) => {
    users.push(user);
};