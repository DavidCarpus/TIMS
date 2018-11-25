import { Request, Response } from 'express';
import * as express from 'express';

export let router: express.Router = express.Router();

router.get('/', (req: Request, res: Response) => {
	console.log('Test 2');
	return res.send({ hello: 'world' });
});

router.get('/users', (req: Request, res: Response) => res.send([]));

router.post('/users', (req: Request, res: Response) => res.send({ body: req.body }));
