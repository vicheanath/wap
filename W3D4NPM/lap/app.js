// 1. Create a npm project and install Express.js (Nodemon if you want)
// 2. For “/users” and “/products”, provides GET and POST requests handling (of your choice with your content) in different routers.

// 3. [optional] practice:

// app.use vs app.all vs app.METHODs (app.get, app.post, app.delete, app.put==> you may test with Postman.)
// next(), next('route'), next("err")
// req.body, req,query, req.params
// express Router
// 4. Customize your 404 page
// 5. Provide your own error handling

const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

// Local data
let users = [];
let products = [];

// User validation
let userValidation = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).send({
      message: "Username and password are required",
    });
  } else {
    next();
  }
};
// Product validation
let productValidation = (req, res, next) => {
  const { name, price } = req.body;
  if (!name || !price) {
    res.status(400).send({
      message: "Name and price are required",
    });
  } else {
    next();
  }
};

// Routes get list of users ?limit=10&offset=0
router.get("/users", (req, res, next) => {
  let { limit, offset } = req.query;
  limit = limit || 10;
  offset = offset || 0;
  res.send(users.slice(offset, offset + limit));
});

// Routes get user by username
router.get("/users/:username", (req, res, next) => {
  const { username } = req.params;
  const user = users.find((user) => user.username === username);
  if (user) {
    res.send(user);
  }
  res.status(404).send({
    message: "User not found",
  });
});
// Routes create user
router.post("/users", userValidation, (req, res, next) => {
  const { username, password } = req.body;
  users.push({ username, password });
  res.status(201).send({
    message: "User created successfully",
    data: { username, password },
  });
});

// Routes get list of products ?limit=10&offset=0
router.get("/products", (req, res, next) => {
  let { limit, offset } = req.query;
  limit = limit || 10;
  offset = offset || 0;
  res.send(products.slice(offset, offset + limit));
});

// Routes get product by name
router.post("/products", productValidation, (req, res, next) => {
  const { name, price } = req.body;
  products.push({ name, price });
  res.status(201).send({
    message: "Product created successfully",
    data: { name, price },
  });
});

app.use(router);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

let logErrors = (err, req, res, next) => {
  console.error(err.stack);
  next(err);
};
let clientErrorHandler = (err, req, res, next) => {
  if (req.xhr) {
    res.status(500).send({ error: "Something failed!" });
  } else {
    next(err);
  }
};
let errorHandler = (err, req, res, next) => {
  res.status(500);
  res.send("error");
};

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
