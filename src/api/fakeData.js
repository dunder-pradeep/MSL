const faker = require("faker");
faker.seed(1000);
let users = [];
let posts = [];
let courses = [];

for (let i = 0; i < 3; i++) {
  users.push({
    id: i,
    name: faker.name.findName(),
    email: faker.internet.email(),
  });

  posts.push({
    id: i,
    author: faker.name.findName(),
    title: faker.random.words(),
    replyCount: faker.random.number(),
    head: faker.random.word(),
  });

  courses.push({
    id: i,
    name: faker.lorem.word(),
    startDate: faker.date.recent().toUTCString(),
    status: "Ongoing",
    desc: faker.lorem.paragraph(),
    resources: ["MIT OCW 312", "gfg"],
  });
}

module.exports = { users: users, posts: posts, courses: courses };
