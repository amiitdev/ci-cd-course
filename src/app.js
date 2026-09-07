module.exports = {
  start(port) { console.log("server running on :" + port); }
};

// --- login feature (feature/login branch) ---
function login(user, pass) {
  return user && pass ? "token-abc" : null;
}
