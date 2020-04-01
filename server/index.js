import app from './app';
import {port} from './config';

const PORT = port || 3003;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
