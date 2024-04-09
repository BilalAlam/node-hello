const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node now with my new edit and another edit!\n'
  res.end(msg);
});

server.listen(port, () => {
  let dateObj = new Date(); 
  console.log(`Server is running on http://localhost:${port}/ at ${dateObj}`);
});
