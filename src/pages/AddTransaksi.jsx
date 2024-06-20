import AddTransaction from "../components/Transaction/Add";
import AddHistory from "../components/Transaction/History/Add/AddHistory";

function AddTransaksi() {
  return (
    <div className="flex w-full flex-col gap-1">
      <div className=" flex flex-col gap-10  ">
        <div className="flex w-full sticky top-0 pl-10 p-4 items-center justify-between shadow-md bg-white bg-opacity-50 backdrop-blur-sm">
          <div className="flex">
            <a href="/">Home</a>
            <span> / </span>
            <a href="/transaksi/add">Add Transaction</a>
          </div>
          <div className="flex">
            <h1>Transaction</h1>
          </div>
        </div>
        <div>
          <AddTransaction />
        </div>
      </div>
      <AddHistory />
    </div>
  );
}
export default AddTransaksi;
