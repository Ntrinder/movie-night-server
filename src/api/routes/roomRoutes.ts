import express from 'express';
import {addRoom, joinRoom} from "../controllers/roomController";

const router = express.Router();

router.post('/add-room', addRoom);
router.put('/join-room', joinRoom)

export default router;
