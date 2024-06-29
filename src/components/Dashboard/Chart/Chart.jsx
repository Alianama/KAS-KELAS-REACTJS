import { CChart } from "@coreui/react-chartjs";
import { useState, useEffect } from "react";
import fetchDataFromAPI from "./index";

const getStyle = (cssVar) => {
  return getComputedStyle(document.documentElement).getPropertyValue(cssVar);
};

const ChartComponent = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDataFromAPI();
      setChartData(data);
    };

    fetchData();
  }, []);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const pemasukanData = months.map((month, index) => {
    const monthNumber = index + 1;
    const foundMonth = chartData.allMonthsAdd?.find(
      (item) => item.month === monthNumber
    );
    return foundMonth ? parseInt(foundMonth.total_add) : 0;
  });

  const pengeluaranData = months.map((month, index) => {
    const monthNumber = index + 1;
    const foundMonth = chartData.allMonthsWithdraw?.find(
      (item) => item.month === monthNumber
    );
    return foundMonth ? parseInt(foundMonth.total_withdraw) : 0;
  });

  return (
    <div className="transition flex w-4/5 justify-center items-center p-10 duration-300 ease-in-out hover:scale-105 rounded-setup shadow-xl cursor-pointer ">
      <CChart
        className="w-full flex"
        type="bar"
        data={{
          labels: months,
          datasets: [
            {
              label: "Pemasukan",
              backgroundColor: "#ffa21d",
              borderColor: "#ffa21d",
              data: pemasukanData,
            },
            {
              label: "Pengeluaran",
              backgroundColor: "#143d61",
              borderColor: "#143d61",
              data: pengeluaranData,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              labels: {
                color: getStyle("--cui-body-color"),
              },
            },
          },
          scales: {
            x: {
              grid: {
                color: getStyle("--cui-border-color-translucent"),
              },
              ticks: {
                color: getStyle("--cui-body-color"),
              },
            },
            y: {
              grid: {
                color: getStyle("--cui-border-color-translucent"),
              },
              ticks: {
                color: getStyle("--cui-body-color"),
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ChartComponent;
