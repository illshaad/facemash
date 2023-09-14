const { randomeCat } = require("../controller/cat-ctrl");
const Cat = require("../models/cat.js");

jest.mock("../models/cat.js");

describe("randomCat", () => {
  it("should return an array of two random cats", async () => {
    const req = {};
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    const mockRandomCats = [
      { id: 1, url: "cat1.jpg", vote: 0 },
      { id: 2, url: "cat2.jpg", vote: 0 },
    ];
    Cat.aggregate.mockResolvedValue(mockRandomCats);
    await randomeCat(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockRandomCats);
    expect(Cat.aggregate).toHaveBeenCalledWith([{ $sample: { size: 2 } }]);
  });
});
