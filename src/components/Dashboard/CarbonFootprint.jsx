import React, { useEffect, useState } from "react";
import axios from "axios";

const CarbonFootprint = ({ email }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch carbon footprint data on component mount
  useEffect(() => {
    const fetchCarbonFootprint = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8090/api/v1/footprint/email/${email}`
        );
        setData(response.data);
      } catch (err) {
        setError("Failed to fetch carbon footprint data. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (email) {
      fetchCarbonFootprint();
    }
  }, [email]);

  return (
    <div className="carbon-footprint-cont">
      <h1>Carbon Footprint:</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : data.length > 0 ? (
        <ul className="carbon-footprint-list">
          {data.map((entry, index) => (
            <li key={index} className="carbon-footprint-item">
              <strong>Entry {index + 1}:</strong> {entry.footprint} kg CO₂
            </li>
          ))}
        </ul>
      ) : (
        <p>No carbon footprint data found for this user.</p>
      )}
    </div>
  );
};

export default CarbonFootprint;