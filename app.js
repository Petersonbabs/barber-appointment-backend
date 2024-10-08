import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
const app = express();

// ROUTERS
import authRoutes from './routes/auth.route.js'
import errorHandler from './middlewares/errorHandler.js';
import appointmentRoutes from './routes/appointment.route.js'
import usersRoutes from './routes/users.route.js'
import serviceRoutes from './routes/service.route.js'
import reviewRoutes from './routes/review.route.js'
import galleryRoutes from './routes/gallery.route.js'


// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


// ENDPOINTS
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/appointments', appointmentRoutes)
app.use('/api/v1/users', usersRoutes)
app.use('/api/v1/services', serviceRoutes)
app.use('/api/v1/reviews', reviewRoutes)
app.use('/api/v1/gallery', galleryRoutes)
app.get('/api/v1', (req, res) => {
  res.send('Barber Appointment V1');
});



app.all('*', (req, res) => {
  res.json(`${req.method} ${req.originalUrl} is not an endpoint on this server`)
})


app.use("*", errorHandler)

export default app