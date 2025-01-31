const os = require('os');

const host = os.hostname();
const platform = os.platform();
const cpuCores = os.cpus().length;

const http = require('http');
const hostname = '127.0.0.1';
const port = 4000;

console.log(`Sever connected...`);
const sever = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(`
        Create By: 66033872 ยศยุต ฤธาทิพย์
        Welcome to CSI203-Laboratory: Demo-SeverNode.js....
        Sever: ${host}
        Port: ${port}
        Platform: ${platform}
        CPU Cores: ${cpuCores}

        `);
});

sever.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});