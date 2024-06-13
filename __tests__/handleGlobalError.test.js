import { test, describe, expect, beforeAll } from "vitest";
import axios from "axios";

const {
  VITE_APP_URL,
  TEST_NAME,
  TEST_EMAIL,
  TEST_PASSWORD,
  TEST_AXIOSERROR_URL,
  TEST_POSTID,
} = import.meta.env;
let myToken;
let axiosConfig;

beforeAll(async () => {
  try {
    const res = await axios.post(`${VITE_APP_URL}/users/sign-up`, {
      name: TEST_NAME,
      email: TEST_EMAIL,
      password: TEST_PASSWORD,
      confirmPassword: TEST_PASSWORD,
    });
    myToken = res.data.token;
    axiosConfig = {
      headers: {
        Authorization: `Bearer ${myToken}`,
      },
    };
  } catch (err) {
    console.log("Error during beforeAll:", err);
  }
});

describe("Error Handling Tests", () => {
  test("should handle AxiosError", async () => {
    try {
      if (myToken) {
        await axios.get(`${TEST_AXIOSERROR_URL}/posts`, axiosConfig);
      }
    } catch (err) {
      expect(err.response.status).toBe(502);
      expect(err.response.data.message).toBe("axios 連線錯誤");
    }
  });
  test("should handle ValidationError", async () => {
    try {
      const data = {
        content: "",
        image: "",
        tags: [],
      };
      if (myToken) {
        await axios.post(`${VITE_APP_URL}/posts`, data, axiosConfig);
      }
    } catch (err) {
      expect(err.response.status).toBe(400);
      expect(err.response.data.message).toBe(
        "資料欄位未正確填寫，請重新輸入！",
      );
    }
  });
  test("should handle CastError", async () => {
    try {
      if (myToken) {
        await axios.get(`${VITE_APP_URL}/posts/${TEST_POSTID}`, axiosConfig);
      }
    } catch (err) {
      expect(err.response.status).toBe(400);
      expect(err.response.data.message).toBe("參數錯誤");
    }
  });
});
