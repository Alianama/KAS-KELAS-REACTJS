import Withdraw from "../components/Transaction/Withdraw";

function Report() {
  return (
    <div className=" flex flex-col gap-10 w-full  ">
      <div className="flex w-full sticky top-0 pl-10 p-4 items-center justify-between shadow-md bg-white bg-opacity-50 backdrop-blur-sm">
        <div className="flex ">
          <a href="/">Home</a>
          <span> / </span>
          <a href="/transaksi/withdraw">Withdraw</a>
        </div>
        <div className="flex">
          <h1>Withdraw</h1>
        </div>
      </div>
      <Withdraw />
    </div>
  );
}

export default Report;
