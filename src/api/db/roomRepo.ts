import {Room, User} from "@types";

const rooms: Room[] = [];
let roomIdCounter = 0;
let userIdCounter = 0;

export const createRoom = (name: string): Room => {
    const newRoom = {
        id: roomIdCounter,
        name,
        recommendations: [],
        users: [],
    }

    rooms.push(newRoom);
    roomIdCounter++;

    return newRoom;
}

export const findRoomById = (id: number): Room | undefined => {
    return rooms.find(room => room.id === id)
}

export const addUserToRoom = (roomId: number, user: User): void => {
    const foundRoom = rooms.find(room => room.id === roomId);
    if (foundRoom) {
        user.id = userIdCounter.toString();
        userIdCounter++;
        foundRoom.users.push(user);
    }
}

export const updateRoom = (updatedRoom: Room): Room | undefined => {
    let foundRoom = rooms.find(dbRoom => dbRoom.id === updatedRoom.id);

    if (!foundRoom) {
        return undefined;
    }

    foundRoom.name = updatedRoom.name;
    return foundRoom;
}

export const deleteRoomById = (id: number): void => {
    const index = rooms.findIndex(dbRoom => dbRoom.id === id);
    if (index !== -1) {
        rooms.splice(index, 1);
    }
};
