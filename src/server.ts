import dotenv from 'dotenv';
import server from './index.js';
dotenv.config();

const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`It's alive on port ${PORT}`);
})