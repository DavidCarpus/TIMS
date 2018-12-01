const { Rxios } = require('rxios');

// var http = require('http');
// var options = {
// 	host: 'www.site2scrape.com',
// 	port: 80,
// 	path: '/page/scrape_me.html'
// };

const http = new Rxios({
	// all regular axios request configuration options are valid here
	// check https://github.com/axios/axios#request-config
	// baseUrl: 'http://jsonplaceholder.typicode.com',
	// baseURL: 'https://jsonplaceholder.typicode.com',
	baseURL: 'http://miltonnh-us.com',
});

// const test: Observable<any> = http.get(options);
// test.subscribe(data => {
// 	console.log('data', data);
// })
http
	.get('/')
	.subscribe(
		(response: {}) => {
			console.log(response); // no need to 'response.data'
		},
		(err: {}) => {
			console.error(err);
		}
	);
