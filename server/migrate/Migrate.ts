import { cacheFetchURI } from './IO';

const tst$ = cacheFetchURI('http://miltonnh-us.com/uploads/index_806_1922881116.pdf');
// const tst$ = cacheFetchURI('http://miltonnh-us.com/');

tst$.subscribe(
	(response) => {
		console.log(response);
	},
	(err: {}) => {
		console.error(err);
	},
	// () => { console.log('completed'); }
)
