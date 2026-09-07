module.exports = {   // EDIT from main
module.exports = {   // NAVBAR-FIX applied
  start(port) { console.log("server running on :" + port); }
};

// --- login feature (feature/login branch) ---
function login(user, pass) {
  return user && pass ? "token-abc" : null;
}
