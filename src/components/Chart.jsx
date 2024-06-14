import { CChart } from "@coreui/react-chartjs";

const getStyle = (cssVar) => {
  return getComputedStyle(document.documentElement).getPropertyValue(cssVar);
};

const ChartComponent = () => {
  return (
    <div style={{ width: "70%" }}>
      <CChart
        type="line"
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "Pemasukan",
              backgroundColor: "rgba(0, 255, 0, 0.2)",
              borderColor: "rgba(0, 255, 0, 1)",
              pointBackgroundColor: "rgba(0, 255, 0, 1)",
              pointBorderColor: "#fff",
              data: [40, 100],
            },
            {
              label: "pengeluaran",
              backgroundColor: "rgba(151, 187, 205, 0.2)",
              borderColor: "rgba(151, 187, 205, 1)",
              pointBackgroundColor: "rgba(151, 187, 205, 1)",
              pointBorderColor: "#fff",
              data: [50, 10],
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
