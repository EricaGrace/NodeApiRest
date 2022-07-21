//http module is used to ake http requests
const http = require('http');

//create a server 
const server = http.createServer((req, res) => {
    console.log(req);
    //const / let
    const { url, method } = req;
    if (url === '/'){
res.setHeader('content-Type', 'text/html');
res.write('<Html>');
res.write('<body><form action="/message"><input type="text" name ="message"> <button type="submit"> Send </button></form></body>');
res.write('</Html>');
res.end();
    } 
if (url === '/message' && method === 'POST') {
    const body = [] ; 
    //data event is emitted when data is received
    req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
    }).on('end', () => {
        const parseBody = Buffer.concat(body).toString();
        console.log(oarsedBody);
        //fs.writeAsync
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }).on('error', (err) => {
        console.log(err);
    });
}
})


server.listen(3000);
