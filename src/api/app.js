const express = require("express");
const faker = require("faker");
const data = require("./fakeData");
const { random } = require("faker");

const app = express();
let users = data.users;
let posts = data.posts;
let courses = data.courses;

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.use(express.json());

//req for forums
app.get("/api/forums/", (req, res) => {
  res.send(posts);
});

app.post("/api/forums/", (req, res) => {
  const newpost = req.body;
  posts.push(newpost);

  res.send(newpost);
});

//req for courses
app.get("/api/courses/", (req, res) => {
  res.send(courses);
});

app.post("/api/courses/", (req, res) => {
  const newcourse = req.body;
  posts.push(newcourse);

  res.send(newcourse);
});

//req for users
app.get("/api/auth/", (req, res) => {
  res.send(users);
});

app.post("/api/auth/", (req, res) => {
  const newuser = req.body;
  users.push(newuser);
  const token = random.alphaNumeric();
  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token");
  console.log(newuser);
  res.send(newuser);
});

//api for global res..
app.get("/api/course/", (req, res) => {
  const course = {
    id: faker.random.number(),
    createdBy: faker.name.findName(),
    name: faker.lorem.word(),
    date: faker.date.recent().toUTCString(),
    status: "Ongoing",
    desc: faker.lorem.paragraph(),
    resources: ["MIT OCW 312", "gfg"],
    type: "",
    fav_count: faker.random.number(),
    diff: faker.random.float(),
    interest: faker.random.number(),
    dropped: faker.random.number(),
    threads: posts[0],
    dist: [
      faker.random.number(),
      faker.random.number(),
      faker.random.number(),
      faker.random.number(),
    ],
    diff_dist: 0,
  };
  res.send(course);
});

app.post("/api/auth/", (req, res) => {
  const newuser = req.body;
  users.push(newuser);
  const token = random.alphaNumeric();
  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token");
  console.log(newuser);
  res.send(newuser);
});

app.listen(8080);
