import Withdraw from "../components/Transaction/Withdraw";
import Amount from "../components/Dashboard/Amount/Amount";

function Report() {
  return (
    <div className=" flex flex-col w-full  ">
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
      <div className="flex w-full flex-col gap-10 p-10">
        <Amount />
        <Withdraw />
      </div>
    </div>
  );
}

export default Report;
