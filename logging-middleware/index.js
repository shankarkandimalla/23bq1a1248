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

    /*
    Future API Call

    await axios.post(LOG_API_URL,{
      stack,
      level,
      packageName,
      message
    });
    */
  } catch (error) {
    console.error(
      "Logging Error:",
      error.message
    );
  }
}

module.exports = Log;