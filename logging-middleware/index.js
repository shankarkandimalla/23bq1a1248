const axios = require("axios");

async function Log(
  stack,
  level,
  packageName,
  message
) {
  try {
    console.log({
      stack,
      level,
      packageName,
      message,
      timestamp: new Date().toISOString(),
    });

 
  } catch (error) {
    console.error(
      "Logging Error:",
      error.message
    );
  }
}

module.exports = Log;