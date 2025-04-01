import {addUserToRoom, createRoom, deleteRoomById, findRoomByCode, findRoomById} from "../db/roomRepo";
import {User} from "@types";

export const addRoom = (roomName: string) => {
    return createRoom(roomName);
};

export const joinRoom = (roomCode: string, username: string) => {
    const room = findRoomByCode(roomCode);

    if (!room) throw new Error('Room not found');

    const usernameTaken = room.users.some(user => user.name === username);

    if (usernameTaken) throw new Error(
        `Username ${username} is already taken`
    )

    const user: User = {
        id: '',
        name: username,
    }

    addUserToRoom(room.id, user);
}

export const removeRoom = (deletedRoomId: number) => {
    deleteRoomById(deletedRoomId);
};
