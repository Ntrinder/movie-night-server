import express from 'express';
import {addRoom, joinRoom, removeRoom} from "../controllers/roomController";

const router = express.Router();

router.post('/add-room', addRoom);
router.put('/join-room', joinRoom);
router.delete('/remove-room', removeRoom);

export default router;
