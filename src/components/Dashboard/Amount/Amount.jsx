import "../../../output.css";
import { FaMoneyBill, FaCalendar } from "react-icons/fa";
import { useEffect, useState } from "react";
import fetchDataFromAPI from "./index";

function Amount() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchDataFromAPI();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="d-flex w-100 gap-9 text-white">
      <div
        className={`card bg-1 shadow border-none d-flex flex-row items-center w-full gap-10 p-4 transition duration-300 ease-in-out hover:scale-105  rounded-setup ${
          loading ? "animate-pulse" : ""
        }`}
      >
        <div className="card-body d-flex flex-col w-full ">
          <h1 className="card-title text-white">Total Uang Kas</h1>
          {data && (
            <h1 className="card-text text-4xl text-white">
              IDR{" "}
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(isNaN(data.totalAmount) ? 0 : data.totalAmount)}
            </h1>
          )}
          {loading && (
            <h1 className="card-text text-4xl text-white animate-pulse">
              IDR Rp. ...
            </h1>
          )}
        </div>
        <span className="mr-2 text-white ">
          <FaMoneyBill size={50} />
        </span>{" "}
      </div>
      <div
        className={`card bg-2 shadow border-none d-flex flex-row items-center w-full gap-10 p-4 transition duration-300 ease-in-out hover:scale-105  rounded-setup ${
          loading ? "animate-pulse" : ""
        }`}
      >
        <div className="card-body d-flex flex-col w-full ">
          <h1 className="card-title text-white">Pemasukan Bulan Ini</h1>
          {data && (
            <h1 className="card-text text-4xl text-white">
              IDR{" "}
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(isNaN(data.totalAddMonthly) ? 0 : data.totalAddMonthly)}
            </h1>
          )}
          {loading && (
            <h1 className="card-text text-4xl text-white animate-pulse">
              IDR Rp. ...
            </h1>
          )}
        </div>
        <span className="mr-2 text-white ">
          <FaCalendar size={50} />
        </span>{" "}
      </div>
      <div
        className={`card bg-0 shadow border-none d-flex flex-row items-center w-full gap-10 p-4 transition duration-300 ease-in-out hover:scale-105  rounded-setup ${
          loading ? "animate-pulse" : ""
        }`}
      >
        <div className="card-body d-flex flex-col w-full ">
          <h1 className="card-title ">Pengeluaran Bulan ini</h1>
          {data && (
            <h1 className="card-text text-4xl ">
              IDR{" "}
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(
                isNaN(data.totalWithdrawMonthly) ? 0 : data.totalWithdrawMonthly
              )}
            </h1>
          )}
          {loading && (
            <h1 className="card-text text-4xl animate-pulse">IDR Rp. ...</h1>
          )}
        </div>
        <span className="mr-2">
          <FaCalendar size={50} />
        </span>{" "}
      </div>
    </div>
  );
}

export default Amount;
