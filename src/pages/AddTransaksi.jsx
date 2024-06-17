import { CBreadcrumb, CBreadcrumbItem } from "@coreui/react";
import AddTransaction from "../components/Transaction/Add";
import AddHistory from "../components/Transaction/History/AddHistory";
import "../output.css";

function AddTransaksi() {
  return (
    <div className="d-flex flex-col gap-1">
      <div className=" d-flex flex-col gap-10  ">
        <div
          className="header flex flex-row-reverse w-full items-center pl-10 top-0 shadow-sm "
          style={{ position: "sticky", zIndex: "10" }}
        >
          <div className="text-3xl  mb-4">Add Transaksi</div>
          <CBreadcrumb>
            <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
            <CBreadcrumbItem active>Add Transaksi</CBreadcrumbItem>
          </CBreadcrumb>
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
