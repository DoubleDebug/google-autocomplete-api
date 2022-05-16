import express from 'express';
import dotenv from 'dotenv';
import { getAutocomplete } from './routes/autocomplete.js';

dotenv.config();
const PORT = process.env.PORT || 5000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

const app = express();
app.use(express.json());
app.get('/autocomplete', getAutocomplete);

app.listen(PORT, HOSTNAME, () => {
    console.log(`Started server at http://${HOSTNAME}:${PORT}.`);
});
