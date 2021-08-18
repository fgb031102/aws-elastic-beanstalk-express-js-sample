const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Hello! 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'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
