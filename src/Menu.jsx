import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddTransaksi from "./pages/AddTransaksi";
import WithdrawTransaksi from "./pages/WithdrawTransaksi";
import RiwayatTransaksi from "./pages/Riwayat";
import Report from "./pages/Report";
import Sidebar from "./pages/Sidebar";

// eslint-disable-next-line react/prop-types
const Main = ({ isLoggedIn, handleLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const shouldShowSidebar = () => {
    return location.pathname !== "/";
  };

  const onLogout = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <div className="d-flex w-full flex-row">
      {shouldShowSidebar() && (
        <div className="top-0 h-screen">
          <Sidebar onLogout={onLogout} />
        </div>
      )}
      <div className={`${shouldShowSidebar() ? "ml-60" : ""} w-full flex`}>
        <Routes>
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
          />
          <Route
            path="/transaksi/add"
            element={isLoggedIn ? <AddTransaksi /> : <Navigate to="/" />}
          />
          <Route
            path="/transaksi/withdraw"
            element={isLoggedIn ? <WithdrawTransaksi /> : <Navigate to="/" />}
          />
          <Route
            path="/transaksi/riwayat"
            element={isLoggedIn ? <RiwayatTransaksi /> : <Navigate to="/" />}
          />
          <Route
            path="/report"
            element={isLoggedIn ? <Report /> : <Navigate to="/" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
