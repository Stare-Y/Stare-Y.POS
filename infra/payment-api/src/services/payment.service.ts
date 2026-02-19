export const processPayment = (data: any) => {
  // fake logic for now
  return {
    id: Date.now(),
    status: "approved",
    ...data,
  };
};
