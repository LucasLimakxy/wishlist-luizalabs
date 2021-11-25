const express = require('express');
const app = express();
const swaggerUi = require("swagger-ui-express");
const router = require('./routes');
const swaggerDocs = require('./swagger.json');

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(express.json());
app.use(router);

app.listen('3000', () => console.log('The server is running on port 3000'));
