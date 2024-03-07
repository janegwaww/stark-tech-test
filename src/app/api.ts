import axios from "axios";
import * as R from "ramda";

const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRlIjoiMjAyNC0wMy0wNyAxMTowOTowNCIsInVzZXJfaWQiOiJKYW5lR3dhd3ciLCJpcCI6IjEwMy4xNTIuMzQuMTM0In0.oRIHYe-BSFAF8yLRddOJmrSmF9XTXEpAuyKuDakyaI0";
axios.defaults.baseURL = "https://api.finmindtrade.com";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

type InfoProps = { dataset: string; data_id?: string };

export const getStockInfo = async (params: InfoProps) => {
  try {
    const response = await axios.get("/api/v4/data", {
      params: { ...params },
    });
    return R.uniqBy<any, any>(
      R.prop("stock_id"),
      R.path(["data", "data"], response)
    );
  } catch (error) {
    console.error(error);
  }
};
