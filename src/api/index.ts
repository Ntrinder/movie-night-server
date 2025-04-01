import express from 'express';
import userRoutes from './routes/userRoutes';
import movieRoutes from './routes/movieRoutes';
import episodeRoutes from "./routes/episodeRoutes";
import recommendationRoutes from "./routes/recommendationRoutes";
import roomRoutes from "./routes/roomRoutes";
import showRoutes from "./routes/showRoutes";

const apiRouter = express.Router();

apiRouter.use('/episodes', episodeRoutes);
apiRouter.use('/movies', movieRoutes);
apiRouter.use('/recommendations', recommendationRoutes);
apiRouter.use('/rooms', roomRoutes);
apiRouter.use('/show', showRoutes);
apiRouter.use('/users', userRoutes);

export default apiRouter;