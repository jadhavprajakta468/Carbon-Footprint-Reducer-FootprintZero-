import React, { useEffect, useState } from "react";
import axios from "axios";

const ScoreList = ({ email }) => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch scores on component mount
  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8090/api/v1/score/email/${email}`
        );
        setScores(response.data);
      } catch (err) {
        setError("Failed to fetch scores. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (email) {
      fetchScores();
    }
  }, [email]);

  return (
    <div className="score-list-cont">
      <h1>Scores:</h1>
      {loading ? (
        <p>Loading scores...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : scores.length > 0 ? (
        <ul className="score-list">
          {scores.map((score, index) => (
            <li key={index} className="score-item">
              <strong>Attempt {index + 1}:</strong> {score.quizScore}
            </li>
          ))}
        </ul>
      ) : (
        <p>No scores found for this user.</p>
      )}
    </div>
  );
};

export default ScoreList;
