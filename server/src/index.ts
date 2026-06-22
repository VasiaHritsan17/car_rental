import express from "express";
import cors from "cors";
import  {corsOptions}  from './middlewares/corsFilter.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors(corsOptions));

app.listen(()=> {
    console.log(`Server listening port: ${PORT}`);
})