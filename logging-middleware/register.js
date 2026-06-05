const axios = require("axios");

async function register() {
  try {
    const response = await axios.post(
      "http://20.244.56.144/evaluation-service/register",
      {
        email: "kbsc.kandimalla@gmail.com",
        name: "Kandimalla Bhavani Shankar",
        mobileNo: "8186036945",
        githubUsername: "https://github.com/shankarkandimalla ",
        rollNo: "23BQ1A1248",
        collegeName: "vvitn",
        accessCode: "QQdEYy"
      }
    );

    console.log(response.data);
  } catch (error) {
    console.log(
      error.response ? error.response.data : error.message
    );
  }
}

register();