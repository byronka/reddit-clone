import * as auth from "./auth";

describe("test the hasher", () => {
  test("it should hash to the same value each time", () => {
    expect(auth.doHash("abc123")).toBe(
      "6ca13d52ca70c883e0f0bb101e425a89e8624de51db2d2392593af6a84118090"
    );
  });

  test("it should *really* hash to the same value each time", () => {
    expect(auth.doHash("abc1234")).toBe(
      "36f583dd16f4e1e201eb1e6f6d8e35a2ccb3bbe2658de46b4ffae7b0e9ed872e"
    );
  });
});
