import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import MyDocument from "../components/Print/index.jsx";

function Report() {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex w-full sticky top-0 pl-10 p-4 items-center justify-between shadow-md bg-white bg-opacity-50 backdrop-blur-sm">
        <div className="flex">
          <a href="/">Home</a>
          <span> / </span>
          <a href="/report">Report</a>
        </div>
        <div className="flex">
          <h1>Report</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <PDFDownloadLink document={<MyDocument />} fileName="report.pdf">
          {({ loading }) => (loading ? "Loading document..." : "Download now!")}
        </PDFDownloadLink>
      </div>
      <div className="flex w-full justify-center">
        <PDFViewer>
          <MyDocument />
        </PDFViewer>
      </div>
    </div>
  );
}

export default Report;
