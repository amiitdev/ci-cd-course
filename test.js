import { test } from "node:test";
import assert from "node:assert/strict";
import { start, login } from "./src/app.js";

test("start returns the running server message", () => {
  assert.match(start(3000), /server running on :3000/);
});

test("login returns a token when credentials are valid", () => {
  const token = login("amit", "secret");
  assert.match(token, /^token-[0-9a-f]{12}$/);
});

test("login returns null when credentials are empty", () => {
  assert.equal(login("", ""), null);
});