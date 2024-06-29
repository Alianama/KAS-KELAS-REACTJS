import axios from "axios";

const fetchDataFromAPI = async () => {
  const data = {};
  const currentMonth = new Date().getMonth() + 1;
  try {
    const totalAddMonthlyResponse = await axios.get(
      "http://localhost:8000/api/transactions/total-add-monthly"
    );

    const allMonthsData = totalAddMonthlyResponse.data;
    data.allMonthsAdd = allMonthsData;

    const currentMonthData = allMonthsData.find(
      (item) => item.month === currentMonth
    );

    data.month = currentMonth;
    data.totalAddMonthly = currentMonthData?.total_add
      ? parseInt(currentMonthData?.total_add)
      : 0;

    const totalWithdrawMonthlyResponse = await axios.get(
      "http://localhost:8000/api/transactions/total-withdraw-monthly"
    );

    const allMonthsWithdrawData = totalWithdrawMonthlyResponse.data;
    data.allMonthsWithdraw = allMonthsWithdrawData;

    const currentMonthWithdrawData = allMonthsWithdrawData.find(
      (item) => item.month === currentMonth
    );

    data.totalWithdrawMonthly = currentMonthWithdrawData?.total_withdraw
      ? parseInt(currentMonthWithdrawData?.total_withdraw)
      : 0;

    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export default fetchDataFromAPI;
