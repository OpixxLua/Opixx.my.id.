/**
 * Simple utility functions
 * Used for project tooling
 */

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randomString(length = 8) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

module.exports = { sleep, randomString };

