const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');
const AuthRoute = require('./routes/auth.routes');
const LoadRoute = require('./routes/product.routes');
const Product = require('./models/Product');

const app = express();

app.use(cors());

app.use(express.json({ extended: true }));

app.use('/api/auth', AuthRoute);

app.use('/api/load', LoadRoute);

const PORT = config.get('port') || 5000;

async function start() {
    try {
         await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
             useUnifiedTopology: true,
             useCreateIndex: true
         });
         app.listen(PORT, () => console.log(`App has been started on port ${PORT} ...`));
     }
    catch (e) {
        console.log('Server error', e.message);
        process.exit(1);
    }
}

start();



