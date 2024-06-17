const fetchData = async () => {
  try {
    const response = await fetch(
      "http://kas-api.alipurnama.my.id/api/transactions/history",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Fetched data is not an array");
    }

    return data;
  } catch (error) {
    console.error("fetchError", error);
    return { status: "error", error: error.message };
  }
};

export default fetchData;
