import React, {useState, useEffect}from "react";
import Sidebar from "./Sidebar";
import "./Dashboard.css";
import Piechart from "./Piechart";

const Dashboard = () => {
  const [totalSubscribeCount, setTotalSubscribeCount] = useState(
    parseInt(localStorage.getItem("subscribeCount")) || 0
  );

  useEffect(() => {
    // Retrieve the subscribe count from local storage and set it in state

    const savedCount = parseInt(localStorage.getItem("subscribeCount"));

    if (!isNaN(savedCount)) {
      setTotalSubscribeCount(savedCount);
    }
  }, []);
  return (
    <>
      <div className="container-card">
        <div className="card">
          <h3>Total Points</h3>
          <p>Points scored by subscriptions.</p>
          <div className="circle-red">
            <p>{totalSubscribeCount*150}</p>
          </div>
        </div>

        <div className="card">
          <h3>Books Subscribed</h3>
          <p>Number of books read.</p>
          <div className="circle-blue">
            <p>{totalSubscribeCount}</p>
          </div>
        </div>

        <div className="card">
          <h3>Active Subscription</h3>
          <p>Number of books currently reading.</p>
          <div className="circle-green">
            <p>1</p>
          </div>
        </div>
      </div>
      <div className="dashboard-table">
        <div className="tbl">
          <table>
            <h3>Top Subscribers by Points</h3>
            <tr>
              <th>Name</th>
              <th>Points</th>
            </tr>
            <tr>
              <td>Abhishek</td>
              <td>3000</td>
            </tr>
            <tr>
              <td>Anshul</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>Alok</td>
              <td>1500</td>
            </tr>
          </table>
        </div>

        <div className="card-pie">
          <h3>Trend Chart</h3>
          <Piechart />
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default Dashboard;
