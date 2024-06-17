import Chart from "../components/Dashboard/Chart/Chart.jsx";
import Amount from "../components/Dashboard/Amount/Amount.jsx";
import { CBreadcrumb, CBreadcrumbItem } from "@coreui/react";
import "../output.css";
import History from "../components/Dashboard/History/History.jsx";

function Dashboard() {
  return (
    <div className=" d-flex flex-col gap-10 ">
      <div className="header fle pl-10 flex-row-reverse shadow-sm">
        <div className="text-3xl  mb-4">Dashboard</div>
        <CBreadcrumb>
          <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
          <CBreadcrumbItem active>Dashboard</CBreadcrumbItem>
        </CBreadcrumb>
      </div>
      <div className="pl-10 pr-10">
        <Amount />
      </div>
      <div className="pl-10 d-flex flex-row w-full gap-2">
        <div className="chart d-flex w-2/4">
          <Chart />
        </div>
        <div className=" ustify-center d-flex"></div>
        <History />
      </div>
    </div>
  );
}
export default Dashboard;
