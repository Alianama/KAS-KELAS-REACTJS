import axios from "axios";

const fetchDataFromAPI = async () => {
  const data = {};
  const currentMonth = new Date().getMonth() + 1;
  try {
    const totalAmountResponse = await axios.get(
      "http://localhost:8000/api/transactions/total-amount"
    );
    data.totalAmount = totalAmountResponse.data
      ? parseInt(totalAmountResponse.data.total_amount)
      : 0;

    const totalAddMonthlyResponse = await axios.get(
      "http://localhost:8000/api/transactions/total-add-monthly"
    );
    const currentMonthData = totalAddMonthlyResponse.data.find(
      (item) => item.month === currentMonth
    );
    data.totalAddMonthly = currentMonthData?.total_add
      ? parseInt(currentMonthData?.total_add)
      : 0;

    const totalWithdrawMonthlyResponse = await axios.get(
      "http://localhost:8000/api/transactions/total-withdraw-monthly"
    );
    const currentMonthWithdrawData = totalWithdrawMonthlyResponse.data.find(
      (item) => item.month === currentMonth
    );
    data.totalWithdrawMonthly = currentMonthWithdrawData?.total_withdraw
      ? parseInt(currentMonthWithdrawData?.total_withdraw)
      : 0;

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchDataFromAPI;
