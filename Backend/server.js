const express = require('express');
const cors = requires('cors');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static('./Assets'));
