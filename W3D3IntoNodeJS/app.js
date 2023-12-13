let http = require("http");
let fs = require("fs");
let server = http.createServer((req, res) => {
    console.log("Request was made: " + req.url);
    res.writeHead(200, {"Content-Type": "application/pdf"});
   
    fs.readFile("./http.pdf", (err, data) => {
        res.end(data);
    });



});

server.listen(3000, "localhost", () => {
  console.log("Server started on port 3000");
});
