import { CBreadcrumb, CBreadcrumbItem } from "@coreui/react";

function Report() {
  return (
    <div className=" d-flex flex-col gap-10  ">
      <div className="header pl-10 flex flex-row-reverse shadow-sm">
        <div className="text-3xl  mb-4">Laporan</div>
        <CBreadcrumb>
          <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
          <CBreadcrumbItem active>Laporan</CBreadcrumbItem>
        </CBreadcrumb>
      </div>
    </div>
  );
}

export default Report;
