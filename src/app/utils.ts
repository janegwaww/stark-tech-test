export const getStockId = (arr: any[]) => (arr[0] ? arr[0]["stock_id"] : "");

export const getStockName = (arr: any[]) => {
  if (arr[0]) {
    const item = arr[0];
    return `${item["stock_name"]}(${item["stock_id"]})`;
  }
  return "";
};
