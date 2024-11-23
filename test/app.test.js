const request = require("supertest");
const app = require("../app");

describe("API Endpoints", () => {
  test("GET /newapi/ should return welcome message", async () => {
    const response = await request(app).get("/newapi/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(
      "Bienvenue sur notre API ! Veuillez accéder aux différentes routes pour obtenir des informations"
    );
  });

  test("GET /newapi/users should return list of users", async () => {
    const response = await request(app).get("/newapi/users");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 1, name: "bilanox" }),
        expect.objectContaining({ id: 2, name: "Bob" }),
      ])
    );
  });

  test("GET /newapi/products should return list of products", async () => {
    const response = await request(app).get("/newapi/products");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(5);
  });

  test("GET /newapi/schools should return list of schools", async () => {
    const response = await request(app).get("/newapi/schools");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "Hope School", location: "Rabat" }),
      ])
    );
  });
});
