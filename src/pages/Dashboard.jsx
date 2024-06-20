import Chart from "../components/Dashboard/Chart/Chart.jsx";
import Amount from "../components/Dashboard/Amount/Amount.jsx";
import History from "../components/Dashboard/History/History.jsx";

function Dashboard() {
  return (
    <div className="flex  w-full gap-3   flex-col">
      <div className="flex w-full sticky top-0 pl-10 p-4 items-center justify-between shadow-md bg-white bg-opacity-50 backdrop-blur-sm">
        <div className="flex">
          <a href="/">Home</a>
          <span> / </span>
          <a href="/dashboard">Dashboard</a>
        </div>
        <div className="flex">
          <h1>DashBoard</h1>
        </div>
      </div>
      <div className="px-10 flex flex-col gap-4">
        <Amount />
        <div className="flex flex-col">
          <div className="flex justify-center">
            <Chart />
          </div>
          <div className="flex flex-row">
            <History />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
