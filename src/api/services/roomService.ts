import {addUserToRoom, createRoom, deleteRoomById, findRoomById} from "../db/roomRepo";
import {User} from "@types";

export const addRoom = (roomName: string) => {
    return createRoom(roomName);
};

export const joinRoom = (roomId: number, username: string) => {
    const room = findRoomById(roomId);

    if (!room) throw new Error('Room not found');

    const usernameTaken = room.users.some(user => user.name === username);

    if (usernameTaken) throw new Error(
        `Username ${username} is already taken`
    )

    const user: User = {
        id: '',
        name: username,
    }

    addUserToRoom(roomId, user);
}

export const removeRoom = (deletedRoomId: number) => {
    deleteRoomById(deletedRoomId);
};
