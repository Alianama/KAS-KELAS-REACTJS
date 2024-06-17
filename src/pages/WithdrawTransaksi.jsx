import { CBreadcrumb, CBreadcrumbItem } from "@coreui/react";

function WithdrawTransaksi() {
  return (
    <div className=" d-flex flex-col gap-10  ">
      <div className="header pl-10 flex flex-row-reverse shadow-sm ">
        <div className="text-3xl  mb-4">Withdraw Transaksi</div>
        <CBreadcrumb>
          <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
          <CBreadcrumbItem active>Withdraw Transaksi</CBreadcrumbItem>
        </CBreadcrumb>
      </div>
    </div>
  );
}
export default WithdrawTransaksi;
