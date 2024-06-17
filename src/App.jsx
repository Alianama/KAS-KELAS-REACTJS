import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import {
  CSidebar,
  CSidebarHeader,
  CSidebarBrand,
  CSidebarNav,
  CNavTitle,
  CNavItem,
  CNavGroup,
  CSidebarToggler,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard";
import AddTransaksi from "./pages/AddTransaksi";
import WithdrawTransaksi from "./pages/WithdrawTransaksi";
import RiwayatTransaksi from "./pages/Riwayat";
import Report from "./pages/Report";
import {
  MdSpaceDashboard,
  MdAdd,
  MdRemove,
  MdHistory,
  MdAssignment,
} from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import "./output.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex  ">
        <CSidebar
          className="vh-100 border-end bg-3 rounded-r-setup shadow-md"
          style={{ position: "fixed", zIndex: "99" }}
        >
          <CSidebarHeader className="border-bottom justify-content-center align-content-center ">
            <CSidebarBrand className=" text-decoration-none ">
              <h5>KAS KELAS</h5>
            </CSidebarBrand>
          </CSidebarHeader>
          <CSidebarNav>
            <CNavTitle>Menu</CNavTitle>
            <CNavItem>
              <Link to="/" className={`nav-link gap-4`}>
                <MdSpaceDashboard size={24} /> Dashboard
              </Link>
            </CNavItem>
            <CNavGroup
              toggler={
                <>
                  <AiOutlineTransaction
                    size={24}
                    style={{ marginRight: "1.5rem" }}
                  />{" "}
                  Transaksi
                </>
              }
            >
              <CNavItem>
                <Link to="/transaksi/add" className={`nav-link gap-4`}>
                  <MdAdd size={24} /> Add Transaksi
                </Link>
              </CNavItem>
              <CNavItem>
                <Link to="/transaksi/withdraw" className={`nav-link gap-4`}>
                  <MdRemove size={24} /> Withdraw Transaksi
                </Link>
              </CNavItem>
            </CNavGroup>
            <CNavItem>
              <Link to="/transaksi/riwayat" className={`nav-link gap-4`}>
                <MdHistory size={24} /> Riwayat Transaksi
              </Link>
            </CNavItem>
            <CNavItem>
              <Link to="/transaksi/report" className={`nav-link gap-4`}>
                <MdAssignment size={24} /> Report
              </Link>
            </CNavItem>
          </CSidebarNav>
          <CSidebarHeader className="border-top bg-2 rounded-br-setup ">
            <CSidebarToggler className=" " />
          </CSidebarHeader>
        </CSidebar>
        <div className="pl-3 w-100" style={{ marginLeft: "240px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transaksi/add" element={<AddTransaksi />} />
            <Route path="/transaksi/withdraw" element={<WithdrawTransaksi />} />
            <Route path="/transaksi/riwayat" element={<RiwayatTransaksi />} />
            <Route path="/transaksi/report" element={<Report />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
