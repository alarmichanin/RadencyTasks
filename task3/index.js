import express from 'express';

import notesRoutes from './routes/notes.js';

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/notes', notesRoutes)

app.get('/', (req, res) => res.send('Hello from homepage!'))

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))