require("dotenv").config();
const AppId = process.env.AppId;
const BASE_URL = process.env.BASE_URL; 
async function fetchRate() {
  try {
    const response = await fetch(`${BASE_URL}/latest.json?app_id=${AppId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
module.exports = fetchRate;
