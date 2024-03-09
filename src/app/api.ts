import axios from "axios";
import * as R from "ramda";

const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRlIjoiMjAyNC0wMy0wNyAxMTowOTowNCIsInVzZXJfaWQiOiJKYW5lR3dhd3ciLCJpcCI6IjEwMy4xNTIuMzQuMTM0In0.oRIHYe-BSFAF8yLRddOJmrSmF9XTXEpAuyKuDakyaI0";
axios.defaults.baseURL = "https://api.finmindtrade.com";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.withCredentials = false;

type InfoProps = { dataset: string; data_id?: string; start_date?: string };

// 从TaiwanStockInfo接口获取列表，并去除重复项
export const getStockInfo = async (params: InfoProps) => {
  try {
    const response = await axios.get("/api/v4/data", {
      params: { ...params, token: AUTH_TOKEN },
    });
    return R.uniqBy<any, any>(
      R.prop("stock_id"),
      R.path(["data", "data"], response)
    );
  } catch (error) {
    console.error(error);
  }
};

// 获取TaiwanStockMonthRevenue
export const getStockRevenue = async (params: InfoProps) => {
  try {
    const response = await axios.get("/api/v4/data", {
      params: { ...params, token: AUTH_TOKEN },
    });
    return R.path(["data", "data"], response);
  } catch (error) {
    console.error(error);
  }
};
