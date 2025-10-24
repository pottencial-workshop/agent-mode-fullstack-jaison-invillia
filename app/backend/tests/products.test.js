const request = require("supertest");
const express = require("express");
const cors = require("cors");
const productsRouter = require("../src/products/routes");

function buildTestApp() {
  const app = express();
  app.use(cors());
  app.use(productsRouter);
  return app;
}

describe("GET /products", () => {
  it("deve retornar lista de produtos contendo id, name e price", async () => {
    const app = buildTestApp();
    const res = await request(app).get("/products");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    const first = res.body[0];
    expect(typeof first.id).toBe("string");
    expect(typeof first.name).toBe("string");
    expect(typeof first.price).toBe("number");
  });
});
