import axios from "axios";

const parkingApi = axios.create({
  baseURL: "https://backend.payandpark.online",
  headers: {
    "Content-Type": "application/json",
  },
});

// get parking station details
export const getParkingStations = async () => {
  const response = await parkingApi.get("/user/parking/stations/");
  return response.data;
};

export default parkingApi;
