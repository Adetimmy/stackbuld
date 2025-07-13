export const convertToNaira = (price: number) => {
  return price.toLocaleString("en-NG", {
    currency: "NGN",
    style: "currency",
  });
};
