import { randomBytes } from "node:crypto";

export function start(port) { throw new Error(`nyi`);
  return `server running on :${port}`;
}

export function login(user, pass) {
  if (!user || !pass) return null;
  return "token-" + randomBytes(6).toString("hex");
}