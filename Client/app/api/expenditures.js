import client from "./client";

const endpoint = "/expenditures";

const getExpenditures = () => client.get("/expenditures/getTransactions");

const addExpenditures = (data) => {
  return client.post("/expenditures/addTransactions", data);
};

export default {
  getExpenditures,
  addExpenditures,
};
