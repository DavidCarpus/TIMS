import { Request, Response } from 'express';
import { NextFunction } from 'express-serve-static-core';

import { router } from './router';

const express = require('express')

const app = express();
// Allow any method from any host and log requests
app.use((req: Request, res: Response, next: NextFunction) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
	if ('OPTIONS' === req.method) {
		res.sendStatus(200);
	} else {
		console.log(`${req.ip} ${req.method} ${req.url}`);
		next();
	}
});

// Handle POST requests that come in formatted as JSON
app.use(express.json());

app.use('/', router);

// start our server on port 4201
app.listen(4201, '127.0.0.1', function () {
	console.log("Server now listening on 4201");
});