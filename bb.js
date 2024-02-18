const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const queryData = q.query;
    const fileName = 'test.txt';

    if (q.pathname === '/write') {
        fs.writeFile(fileName, `Year: ${queryData.year}, Month: ${queryData.month}`, (err) => {
            if (err) throw err;
            res.end('File written');
        });
    } else if (q.pathname === '/read') {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    } else if (q.pathname === '/append') {
        fs.appendFile(fileName, `\nExtra Data: ${queryData.data}`, (err) => {
            if (err) throw err;
            res.end('Data appended');
        });
    } else if (q.pathname === '/delete') {
        fs.unlink(fileName, (err) => {
            if (err) throw err;
            res.end('File deleted');
        });
    } else {
        res.end('Invalid request');
    }
});

server.listen(8081, () => {
    console.log('Server running on port 8081');
    console.log('http://localhost:8081/write?year=2023&month=march');
    console.log('http://localhost:8081/read');
    console.log('http://localhost:8081/append?data=extra_info');
    console.log('http://localhost:8081/delete');
});


