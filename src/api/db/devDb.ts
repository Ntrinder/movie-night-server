// import {Room} from "@types";
//
// const rooms: Room[] = [];
// let idLmao = 0;
//
// export const createRoom = (name: string): Room => {
//     const fakeRoom = {
//         id: idLmao.toString(),
//         name,
//         recommendations: [],
//         users: [],
//     }
//
//     fakeRoom.recommendations.push();
//     idLmao++;
//
//     return fakeRoom;
// }
//
// export const getRoomById = (id: string): Room | null => {
//     const foundRoom = rooms.find(room => room.id === id)
//
//     return foundRoom ?? null;
// }
//
// export const updateRoom = (updatedRoom: Room): Room => {
//     let foundRoom = rooms.find(dbRoom => dbRoom.id === updatedRoom.id);
//
//     if (foundRoom) {
//         foundRoom.name = updatedRoom.name;
//         foundRoom.recommendations = updatedRoom.recommendations;
//     } else {
//         const newRoom: Room = {
//             id: idLmao.toString(),
//             name: updatedRoom.name,
//             recommendations: [],
//         };
//
//         rooms.push(newRoom);
//         foundRoom = newRoom;
//         idLmao++;
//     }
//
//     return foundRoom;
// }
//
// export const deleteRoomById = (id: string): void => {
//     const index = rooms.findIndex(dbRoom => dbRoom.id === id);
//     if (index !== -1) {
//         rooms.splice(index, 1);
//     }
// };
