import * as R from "ramda";

export const getStockId = (arr: any[]) => (arr[0] ? arr[0]["stock_id"] : "");

export const getStockName = (arr: any[]) => {
  if (arr[0]) {
    const item = arr[0];
    return `${item["stock_name"]}(${item["stock_id"]})`;
  }
  return "";
};

export const toYearMonth = (revenue: any) => {
  if (revenue) {
    const { revenue_year, revenue_month } = revenue;
    return `${revenue_year}${
      revenue_month <= 9 ? "0" + revenue_month : revenue_month
    }`;
  }
  return "000000";
};

export const toMonthRevenue = (revenueInfo: any) => {
  if (revenueInfo) {
    const { revenue } = revenueInfo;
    return `${revenue.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
  }
  return "0.0";
};

export const toRevenueRate = (revenueInfo: any) => {
  if (revenueInfo) {
    const { revenue, revenueBefore } = revenueInfo;
    return revenueBefore
      ? Number(((revenue / revenueBefore - 1) * 100).toFixed(2))
      : null;
  }
  return null;
};

export const addRevenueBefore = (data?: any[]) => {
  if (data?.length) {
    return R.map(
      (o) =>
        R.assoc(
          "revenueBefore",
          R.prop(
            "revenue",
            R.find(
              R.whereEq({
                revenue_year: o.revenue_year - 1,
                revenue_month: o.revenue_month,
              }),
              data
            )
          ),
          o
        ),
      data
    );
  }
  return [];
};

export const getYearAgo = (count?: number | string) => {
  const d = new Date();
  const countDown = Number(count);
  const ago = (c: number) =>
    new Date(d.setFullYear(d.getFullYear() - c)).toISOString().split("T")[0];

  if (count) {
    return ago(countDown);
  }
  return ago(5);
};

export const addRateRevenue = (data: any[]) => {
  if (data?.length) {
    return R.pipe(
      R.map((o) => R.assoc("yearMonth", toYearMonth(o))(o)),
      R.map((o) => R.assoc("growRate", toRevenueRate(o))(o))
    )(data);
  }
  return [];
};
