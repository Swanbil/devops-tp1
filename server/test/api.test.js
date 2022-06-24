const index = require("../index");
const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", index);

test("index route works", done => {
  request(app)
    .get("/test")
    .expect("Content-Type", /json/)
    .expect({ message: "The api is working !" })
    .expect(200, done);
});
