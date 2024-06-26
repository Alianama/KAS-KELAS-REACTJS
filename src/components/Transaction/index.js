const fetchData = async (data) => {
  try {
    const response = await fetch(
      "https://kas-api.alipurnama.my.id/api/transactions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json(); // Attempt to parse the JSON response
    return { status: "ok", data: responseData };
  } catch (error) {
    console.error("Fetch error:", error);
    return { status: "error", error: error.message };
  }
};

export default fetchData;
