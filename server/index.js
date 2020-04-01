import app from './app';
import { port } from './config';

const PORT = port || 4000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
