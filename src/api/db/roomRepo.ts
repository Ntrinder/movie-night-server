import {Room, User} from "@types";

const rooms: Room[] = [];
let roomIdCounter = 0;
let userIdCounter = 0;

const generateRandomID = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';
    for (let i = 0; i < 4; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

export const createRoom = (name: string): Room => {
    const newRoom = {
        id: roomIdCounter,
        code: generateRandomID(),
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

export const findRoomByCode = (code: string): Room | undefined => {
    return rooms.find(room => room.code === code)
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
