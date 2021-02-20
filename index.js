const fs = require('fs');
const http = require('http');
const url = require('url');

const tempOverview = fs.readFileSync(
	`${__dirname}/templates/template-overview.html`,
	'utf-8',
);
const tempCard = fs.readFileSync(
	`${__dirname}/templates/template-card.html`,
	'utf-8',
);
const tempProduct = fs.readFileSync(
	`${__dirname}/templates/template-product.html`,
	'utf-8',
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');

const dataObj = JSON.parse(data);

//Server
const server = http.createServer((req, res) => {
	const pathName = req.url;

	//OVERVIEW PAGE
	if (pathName === '/' || pathName === '/overview') {
		res.writeHead(200, {
			'Content-type': 'text/html',
		});
		res.end(tempOverview);

		//PRODUCT PAGE
	} else if (pathName === '/product') {
		res.end('This is the Product');

		//API
	} else if (pathName === '/api') {
		res.writeHead(200, {
			'Content-type': 'application/json',
		});
		res.end(data);

		//NOT FOUND
	} else {
		res.writeHead(404, {
			'Content-type': 'text/html',
			'my-own-header': 'hello-world',
		});
		res.end('<h1>Page not Found</h1>');
	}
});

server.listen(8000, '127.0.0.1', () => {
	console.log('listening on port 8000');
});
