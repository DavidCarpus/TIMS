import { Request, Response } from 'express';
import { NextFunction } from 'express-serve-static-core';

// equivalent of older: const express = require('express')
// import express from 'express';
const express = require('express')
// import * as express from 'express';

// import express = require('express');

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
// A default hello word route
app.get('/', (req: Request, res: Response) => {
	res.send({ hello: 'world' });
});

// start our server on port 4201
app.listen(4201, '127.0.0.1', function () {
	console.log("Server now listening on 4201");
});