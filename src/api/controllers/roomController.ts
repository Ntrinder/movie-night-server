import { Request, Response } from 'express';
import * as roomService from '../services/roomService';

export const addRoom = async (req: Request, res: Response) => {
    const { name } = req.body;
    const newRoom = roomService.addRoom(name);
    res.status(201).json(newRoom);
}

export const joinRoom = async (req: Request, res: Response) => {
    try {
        const { roomCode, username } = req.body;
        roomService.joinRoom(roomCode, username);
        res
            .status(201)
            .json({
                message: 'Joined room successfully.'
            });
    } catch (e) {
        res
            .status(400)
            .json({
                error: true,
                message: e instanceof Error ? e.message : 'An unexpected error occurred',
            });
    }
}

export const removeRoom = async (req: Request, res: Response) => {
    try {
        const { roomId } = req.body;
        roomService.removeRoom(roomId);
        res
            .status(201)
            .json({
                message: 'Removed room successfully.'
            });
    } catch (e) {
        res
            .status(400)
            .json({
                error: true,
                message: e instanceof Error ? e.message : 'An unexpected error occurred',
            });
    }
}
