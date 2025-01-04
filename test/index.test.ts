import supertest from "supertest";
import app, { server } from "../src/index";

describe("GET /", () => {
  const request = supertest.agent(app);

  it("should return helloworld", async () => {
    const res = await request.get("/");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({});
  });

  afterAll((done) => {
    // Closing the DB connection allows Jest to exit successfully.
    server.close();
    done();
  });
});
