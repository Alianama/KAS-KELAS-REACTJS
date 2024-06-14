import Chart from "../components/Chart";
import Amount from "../components/Amount";
import { CBreadcrumb, CBreadcrumbItem } from "@coreui/react";
import "../output.css";

function Dashboard() {
  return (
    <div className=" d-flex flex-col gap-10 ml-50 ">
      <div className="header flex flex-row-reverse bg-cyan-300 ">
        <div className="text-3xl  mb-4">Dashboard</div>
        <CBreadcrumb>
          <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
          <CBreadcrumbItem active>Library</CBreadcrumbItem>
        </CBreadcrumb>
      </div>
      <div className=" ">
        <Amount />
      </div>
      <div className="chart">
        <Chart />
      </div>
      <div className="riwayat">
        <h1>Riwayat</h1>
      </div>
    </div>
  );
}
export default Dashboard;
