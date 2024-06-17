import { CBreadcrumb, CBreadcrumbItem } from "@coreui/react";

function Riwayat() {
  return (
    <div className=" d-flex flex-col gap-10  ">
      <div className="header pl-10 flex flex-row-reverse shadow-sm ">
        <div className="text-3xl  mb-4">Riwayat Transaksi</div>
        <CBreadcrumb>
          <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
          <CBreadcrumbItem active>Riwayat Transaksi</CBreadcrumbItem>
        </CBreadcrumb>
      </div>
    </div>
  );
}
export default Riwayat;
