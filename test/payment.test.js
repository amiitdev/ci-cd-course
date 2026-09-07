import { test } from "node:test";
import assert from "node:assert/strict";
import { isValidCard, formatTotal, createCharge } from "../src/payment.js";

test("accepts a 16-digit card", () => {
  assert.equal(isValidCard("4111111111111111"), true);
});

test("rejects a card that is too short", () => {
  assert.equal(isValidCard("4111"), false);
});

test("formats a total in Indian Rupees", () => {
  assert.equal(formatTotal(199900), "₹1,999.00");
});

test("createCharge throws for an invalid card", () => {
  assert.throws(() => createCharge("123", 500), /invalid card/);
});

test("createCharge returns a succeeded charge", () => {
  const charge = createCharge("4111111111111111", 500);
  assert.equal(charge.status, "succeeded");
});