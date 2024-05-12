// Imports
const express = require('express');
require('express-async-errors');
// Routes
const router = require('./routes');

const app = express();

// Before Middlewares
app.use(express.json());

// Routes
app.use(router);

// After Middlewares
app.use((error, request, response, next) => {
    // Error handler (Middleware express)
    console.error(error);

    response.sendStatus(500);
})

app.listen(3000, () => console.log("Server started"));
