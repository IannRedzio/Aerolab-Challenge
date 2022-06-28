const BASE_URL = "https://coding-challenge-api.aerolab.co/";
const PERSONAL_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmI2OWY1OGVhYjM1YjAwMjU1YWE3NGQiLCJpYXQiOjE2NTYxMzU1MTJ9.HKXPXM2DxHoA1plfdtZ54UGxKyNX7PymUu1LeDZbz-Q";

const HEADER = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer " + PERSONAL_TOKEN,
};

export const api = {
  getUser: async () => {
    return fetch(BASE_URL + "user/me", {
      method: "GET",
      headers: HEADER,
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  },
  getProducts: async () => {
    return fetch(BASE_URL + "products", {
      method: "GET",
      headers: HEADER,
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  },
};
