import { useEffect, useState } from "react";
import fetchDataFromAPI from "./index";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdCalendarMonth } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Amount() {
  const [data, setData] = useState("0");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetchDataFromAPI();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="flex flex-row gap-5">
      <div
        className="flex gap-5 justify-center items-center bg-1 w-2/5 shadow-md p-4 rounded-setup text-white hover:scale-105 transition-all cursor-pointer"
        onClick={() => navigate("/transaksi/add")}
      >
        <div>
          <h2>Total Uang Kas</h2>
          <h1 className="text-md">
            {loading
              ? "Loading..."
              : new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(data.totalAmount)}
          </h1>
        </div>
        <FaMoneyCheckDollar size={40} />
      </div>
      <div className="flex gap-5 justify-center items-center bg-2 w-2/5 shadow-md p-4 rounded-setup text-white hover:scale-105 transition-all cursor-pointer">
        <div>
          <h2>Pemasukan Bulan ini</h2>
          <h1 className="text-md">
            {loading
              ? "Loading..."
              : new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(data.totalAddMonthly)}
          </h1>
        </div>
        <MdCalendarMonth size={40} />
      </div>
      <div
        className="flex gap-5 justify-center items-center bg-0 w-2/5 shadow-md p-4 rounded-setup text-black hover:scale-105 transition-all cursor-pointer"
        onClick={() => navigate("/transaksi/withdraw  ")}
      >
        <div>
          <h2>Pengeluaran Bulan ini</h2>
          <h1 className="text-md">
            {loading
              ? "Loading..."
              : new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(data.totalWithdrawMonthly)}
          </h1>
        </div>
        <MdCalendarMonth size={40} />
      </div>
    </div>
  );
}
export default Amount;
