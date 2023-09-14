const { addVote } = require("../controller/cat-ctrl");
const Cat = require("../models/cat.js");

jest.mock("../models/cat.js");

describe("addVote", () => {
  it("should increment vote  a cat and return a message", async () => {
    const req = { query: { catId: "123" } };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    Cat.findByIdAndUpdate.mockResolvedValue({ vote: 1 });
    await addVote(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: "Vote success" });
    expect(Cat.findByIdAndUpdate).toHaveBeenCalledWith("123", {
      $inc: { vote: 1 },
    });
  });

  it("should error server and return a 500 status", async () => {
    const req = { query: { catId: "123" } };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    Cat.findByIdAndUpdate.mockRejectedValue(new Error("Database error"));
    await addVote(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: "Error server" });
  });
});
