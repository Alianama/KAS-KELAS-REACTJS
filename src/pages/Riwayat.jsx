import History from "../components/Dashboard/History/AllHistory.jsx";

function Report() {
  return (
    <div className=" flex flex-col gap-10 w-full  ">
      <div className="flex w-full  pl-10 p-4 items-center justify-between shadow-md">
        <div className="flex">
          <a href="/">Home</a>
          <span> / </span>
          <a href="/transaksi/riwayat">Riwayat</a>
        </div>
        <div className="flex">
          <h1>Riwayat</h1>
        </div>
      </div>
      <div>
        <History />
      </div>
    </div>
  );
}

export default Report;
