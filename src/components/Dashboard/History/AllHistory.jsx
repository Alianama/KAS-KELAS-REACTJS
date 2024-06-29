import { useEffect, useState } from "react";
import {
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
} from "@coreui/react";
import fetchDataFromAPI from "./index.js";
import { useNavigate } from "react-router-dom";

function Table() {
  const [data, setData] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null); // Add state to handle errors
  const [loading, setLoading] = useState(true); // Add state to handle loading
  const [currentPage, setCurrentPage] = useState(1); // Add state for pagination
  const [searchTerm, setSearchTerm] = useState(""); // Add state for search term
  const [sortType, setSortType] = useState("asc"); // Add state for sort type

  const itemsPerPage = 9; // Number of items per page
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchDataFromAPI();
        if (Array.isArray(result)) {
          setData(
            result.map((item) => ({
              ...item,
              amount: item.add_transaction
                ? item.add_transaction
                : item.withdraw_transaction,
              category: item.category,
              status: item.add_transaction
                ? { category: "Add", color: "bg-success" }
                : { category: "Withdraw", color: "bg-danger" },
              created_at: new Date(item.created_at).toLocaleDateString(
                "id-ID",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                }
              ),
            }))
          );
        } else {
          throw new Error("Fetched data is not an array");
        }
      } catch (error) {
        setError(error.message); // Set error state if there's an issue
      } finally {
        setLoading(false); // Set loading to false after fetch attempt
      }
    };

    fetchData();
  }, []);

  // Calculate the data to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data
    .filter((transaction) =>
      Object.values(transaction).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    .sort((a, b) => {
      const isReversed = sortType === "asc" ? 1 : -1;
      return isReversed * a.created_at.localeCompare(b.created_at);
    })
    .slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages based on the available data length
  const totalPages = Math.ceil(currentData.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle search term change
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle sort type change
  const handleSortTypeChange = () => {
    setSortType(sortType === "asc" ? "desc" : "asc");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error}</p>;
  }

  return (
    <div className="flex w-full flex-col shadow-xl rounded-setup transition duration-300 ease-in-out p-5 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Cari riwayat..."
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="px-10 py-1 border rounded-setup"
        />
        <button
          className=" bg-2 py-1 text-white px-2 rounded-setup "
          onClick={handleSortTypeChange}
        >
          Urutkan {sortType === "asc" ? "terbaru" : "terlama"}
        </button>
      </div>
      <CTable
        className="bg-2 rounded-lg"
        onClick={() => navigate("/transaksi/riwayat")}
        color=""
      >
        <CTableHead color="dark" className="  rounded-lg">
          <CTableRow>
            <CTableHeaderCell scope="col" className="text-sm">
              Date
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="text-sm">
              User
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="text-sm">
              Category
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="text-sm">
              Description
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="text-sm">
              Created At
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="text-sm">
              Amount
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="text-sm">
              Status
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {currentData.map((transaction, index) => (
            <CTableRow key={index} className="h-5">
              <CTableDataCell className="text-sm">
                {transaction.date_update}
              </CTableDataCell>
              <CTableDataCell className="text-sm">
                {transaction.user}
              </CTableDataCell>
              <CTableDataCell className="text-sm">
                {transaction.category}
              </CTableDataCell>
              <CTableDataCell className="text-sm">
                {transaction.description}
              </CTableDataCell>
              <CTableDataCell className="text-sm">
                {transaction.created_at}
              </CTableDataCell>
              <CTableDataCell>
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(transaction.amount)}
              </CTableDataCell>
              <CTableDataCell>
                <button
                  className={`px-3 py-1 ${transaction.status.color} rounded-full`}
                >
                  {transaction.status.category}
                </button>
              </CTableDataCell>
            </CTableRow>
          ))}
          {/* Fill empty rows if currentData.length is less than itemsPerPage */}
          {Array.from({ length: itemsPerPage - currentData.length }).map(
            (_, index) => (
              <CTableRow key={`empty-${index}`} className=" h-5">
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
                <CTableDataCell></CTableDataCell>
              </CTableRow>
            )
          )}
        </CTableBody>
      </CTable>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 mx-1 ${
              currentPage === index + 1
                ? "bg-2 text-white rounded-full"
                : "bg-1 rounded-full"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Table;
