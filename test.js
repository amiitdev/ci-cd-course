const { start } = require("../src/app");

test("starts the server", () => {
  expect(() => start(3000)).not.toThrow();
});
