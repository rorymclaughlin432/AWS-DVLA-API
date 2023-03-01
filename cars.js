const axios = require('axios').default;

const cars = async (regData) => {
  try {
    const resp = await axios({
      method: "post",
      url: `https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles`,
      headers: {
        "x-api-key": "IS8uP68IRY1AQ9vcUW7775fraGND26va36w7ZpL1",
        "Content-Type": "application/json"
      },
      data: regData
    });

    return resp.data;

  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
}

module.exports = { cars };