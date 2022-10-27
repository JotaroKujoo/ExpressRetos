const express = require('express');
const app = express();
const router = require('../ExpressRetos/router');
const PORT = 3000;

app.use(express.json());
app.use(router)

app.listen(PORT, () => {
    console.log(`Server is ON!! using port ${PORT}`);
});