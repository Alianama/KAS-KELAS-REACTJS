const fetchData = async (data) => {
  try {
    const response = await fetch("http://localhost:8000/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    let responseData;
    try {
      responseData = await response.json();
    } catch (jsonError) {
      throw new Error("Invalid JSON response");
    }

    return { status: "ok", data: responseData };
  } catch (error) {
    console.error("Fetch error:", error);
    return { status: "error", error: error.message };
  }
};

export default fetchData;
