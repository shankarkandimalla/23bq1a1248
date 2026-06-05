const axios = require("axios");

async function getNotifications() {
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization:
            "Bearer YOUR_ACCESS_TOKEN_HERE"
        }
      }
    );

    console.log(response.data);

  } catch (error) {
    console.log(
      error.response
        ? error.response.data
        : error.message
    );
  }
}

getNotifications();