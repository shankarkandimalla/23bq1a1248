const axios = require("axios");

async function auth() {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/auth",
      {
        email: "kbsc.kandimalla@gmail.com",
        name: "kandimalla bhavani shankar",
        rollNo: "23bq1a1248",
        accessCode: "QQdEYy",
        clientID: "YOUR_CLIENT_ID",
        clientSecret: "YOUR_CLIENT_SECRET"
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

auth();