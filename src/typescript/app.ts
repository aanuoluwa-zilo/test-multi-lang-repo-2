import express from 'express';
import { Config } from './types';

const app = express();
app.use(express.json());

const config: Config = {
    debug: true,
    version: '1.0.0',
    port: 3000
};

app.get('/', (req, res) => {
    res.json({ 
        message: 'Hello from TypeScript!',
        config: config
    });
});

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});