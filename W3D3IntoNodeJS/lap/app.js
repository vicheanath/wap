// Question2: Create a web server and

// If the path is ‘/image’, send a response of an image to any client. Set an appropriate content-type for your image.
// If the path is ‘/pdf’, send a response of a pdf file to any client. Set a Content-type as "application/pdf".
// If the path is ‘/home’, send “Welcome to my website” text to any client.

let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {
  switch (req.url) {
    case "/image":
      res.setHeader("Content-Type", "image/jpeg")
      fs.readFile("./image.jpg", (err, data) => {
        if (err) throw err;
        res.end(data);
      });
      break;
    case "/pdf":
        res.setHeader("Content-Type", "application/pdf")
      fs.readFile("./pdf.pdf", (err, data) => {
        if (err) throw err;
        res.end(data);
      });
      break;
    case "/home":
      res.setHeader("Content-Type", "text/html");
      res.end("Welcome to my website");
      break;
    default:
      res.setHeader("Content-Type", "text/html");
      res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log(`Server started on http://localhost:3000`);
});
