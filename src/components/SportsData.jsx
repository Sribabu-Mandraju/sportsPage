import React, { useEffect, useState } from "react";
import { Table } from "../Table";
import axios from "axios";


const SportsData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.the-odds-api.com/v4/sports/upcoming/odds/?regions=us&markets=h2h&oddsFormat=american&apiKey=526770ff4553ba603bbbfed9dec19b03"
      );

      // `response.ok` is undefined in Axios; check status instead.
      if (response.status === 200) {
        setData(response.data);
        // console.log(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Error fetching data: " + error.message);
    } finally {
      setLoading(false); // Ensure loading state is updated in both success and error cases.
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div class="animate-pulse space-y-4 p-4 max-w-full mx-auto">
            <div class="h-6 bg-gray-300 rounded w-3/4"></div>

        <div class="space-y-2">
          <div class="h-4 bg-gray-300 rounded w-full"></div>
          <div class="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>

        <div class="h-48 bg-gray-300 rounded"></div>

        <div class="h-10 bg-gray-300 rounded w-1/3"></div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-[20px]">
        {data.length > 0 ? (
          data.map((item, index) => (
            // Adjust Table component to pass data dynamically
            <Table key={index} item={item} />
          ))
        ) : (
          <div className="text-center py-5">No data available.</div>
        )}
      </div>
    </>
  );
};

export default SportsData;
