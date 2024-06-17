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

function Table() {
  const [data, setData] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null); // Add state to handle errors
  const [loading, setLoading] = useState(true); // Add state to handle loading
  const [currentPage, setCurrentPage] = useState(1); // Add state for pagination

  const itemsPerPage = 9; // Number of items per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchDataFromAPI();
        if (Array.isArray(result)) {
          setData(result);
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
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages based on the available data length
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error}</p>;
  }

  return (
    <div className="mx-10 w-4/5 shadow-xl rounded-setup hover:scale-105 transition duration-300 ease-in-out p-10 overflow-hidden">
      <CTable className=" rounded-lg" color="">
        <CTableHead color="dark" className=" rounded-lg">
          <CTableRow>
            <CTableHeaderCell scope="col">Date</CTableHeaderCell>
            <CTableHeaderCell scope="col">User</CTableHeaderCell>
            <CTableHeaderCell scope="col">Category</CTableHeaderCell>
            <CTableHeaderCell scope="col">Amount</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {currentData.map((transaction, index) => (
            <CTableRow key={index} className="h-10">
              <CTableDataCell>{transaction.date_update}</CTableDataCell>
              <CTableDataCell>{transaction.user}</CTableDataCell>
              <CTableDataCell>{transaction.category}</CTableDataCell>
              <CTableDataCell>Rp. {transaction.add_transaction}</CTableDataCell>
            </CTableRow>
          ))}
          {/* Fill empty rows if currentData.length is less than itemsPerPage */}
          {Array.from({ length: itemsPerPage - currentData.length }).map(
            (_, index) => (
              <CTableRow key={`empty-${index}`} className="h-10">
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
