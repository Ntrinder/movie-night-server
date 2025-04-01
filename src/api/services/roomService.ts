import {createRoom, deleteRoomById, getRoomById, updateRoom} from "../db/devDb";
import {Room} from "@types";

export const addRoom = (name: string) => {
    return createRoom(name);
};

export const findRoom = (id: string) => {
    return getRoomById(id);
};

export const editRoom = (updatedRoom: Room) => {
    return updateRoom(updatedRoom);
};

export const removeRoom = (deletedRoomId: string) => {
    deleteRoomById(deletedRoomId);
};
