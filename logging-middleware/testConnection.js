const axios = require("axios");

async function test() {
  try {
    const response = await axios.get(
      "http://20.244.56.144/evaluation-service"
    );

    console.log(response.status);
    console.log(response.data);
  } catch (error) {
    console.log("ERROR:");
    console.log(error.message);

    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    }
  }
}

test();