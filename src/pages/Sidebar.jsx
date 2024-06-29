import { Link } from "react-router-dom";
import { AiOutlineTransaction } from "react-icons/ai";
import {
  MdSpaceDashboard,
  MdAdd,
  MdRemove,
  MdHistory,
  MdAssignment,
} from "react-icons/md";
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

// eslint-disable-next-line react/prop-types
const Sidebar = ({ onLogout }) => {
  return (
    <CSidebar className="h-full z-10 fixed border-end w-5/5 bg-3 rounded-r-setup shadow-md">
      <CSidebarHeader className="border-bottom justify-content-center align-content-center">
        <CSidebarBrand className="text-decoration-none">
          <h5>KAS KELAS</h5>
        </CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav>
        <CNavTitle>Menu</CNavTitle>
        <CNavItem>
          <Link to="/dashboard" className="nav-link gap-4">
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
            <Link to="/transaksi/add" className="nav-link gap-4">
              <MdAdd size={24} /> Add Transaksi
            </Link>
          </CNavItem>
          <CNavItem>
            <Link to="/transaksi/withdraw" className="nav-link gap-4">
              <MdRemove size={24} /> Withdraw Transaksi
            </Link>
          </CNavItem>
        </CNavGroup>
        <CNavItem>
          <Link to="/transaksi/riwayat" className="nav-link gap-4">
            <MdHistory size={24} /> Riwayat Transaksi
          </Link>
        </CNavItem>
        <CNavItem>
          <Link to="/report" className="nav-link gap-4">
            <MdAssignment size={24} /> Report
          </Link>
        </CNavItem>
      </CSidebarNav>
      <CSidebarHeader className="border-top bg-2 rounded-br-setup">
        <div className="flex justify-center items-center gap-2 cursor-pointer ">
          <p onClick={onLogout}>Logout</p>
          <CSidebarToggler onClick={onLogout} />
        </div>

        {/* <button className="btn btn-primary w-full" onClick={onLogout}>
          Logout
        </button> */}
      </CSidebarHeader>
    </CSidebar>
  );
};

export default Sidebar;
