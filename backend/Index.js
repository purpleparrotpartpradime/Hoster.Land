const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts');

const app = express();
app.use(bodyParser.json());

app.use('/api/posts', postRoutes);

const PORT = process.env.API_PORT || 4000;
app.listen(PORT, () => console.log(`API server running on port ${PORT}`));
