"use strict";

const supertest = require("supertest");
const server = require("../src/server.js");
const request = supertest(server.app);

describe("testing server", () => {
  it("testing 404 on bad path", async () => {
    const response = await request.get("/perso");
    expect(response.status).toEqual(404);
  });

  it("testing 404 on bad method", async () => {
    const response = await request.delete("/person");
    expect(response.status).toEqual(404);
  });

  it("testing 200 with GET", async () => {
    const response = await request.get("/person");
    expect(response.status).toEqual(200);
  });

  it("testing 201 on with post", async () => {
    const response = await request.post("/food").send({name:'mansaf', type:'main dish'});
    expect(response.status).toEqual(201);
  });

  it("testing 200 with GET and param", async () => {
    const response = await request.get("/person/1");
    expect(response.status).toEqual(200);
  });
  it("testing 201 with put", async () => {
    const response = await request.put("/person/1").send({firstName:'mohammad', lastName:'salameh'});
    expect(response.status).toEqual(201);
  });
  it("testing 201 with Delete", async()=>{
      const response = await request.delete('/food/1');
      expect(response.status).toEqual(200);
  })
});
