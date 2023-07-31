import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://m1smj96xd3.execute-api.ca-central-1.amazonaws.com/dev/courses");
      if (!response.ok) {
        setError("Network response was not ok. Status code " + response.status);
        return;
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
      setError("The error is ", error);
    }
  };

  return (
    <main>
      <div className="sidebar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <NavLink to="#">My Topics</NavLink>
          </li>
          <li>
            <NavLink to="/editprofile">Settings</NavLink>
          </li>
        </ul>
      </div>

      <h2 className="trending-topics">Trending Topics</h2>

      <div className="box-container">
        {error && <h4>The error is {error}</h4>}

        {data &&
          data['courses'].map(({ name, courseImage, videoUrl }) => (
            <div className="box" key={name}>
              <NavLink
                key={"/coursecontent"}
                to="/coursecontent"
                state={{ name: name, videoUrl: videoUrl}}
                className="box-link"
              >
                <h2>{name}</h2>

                <div className="image-container">
                  <img src={courseImage} alt="first topic" />
                </div>
              </NavLink>
            </div>
          ))}

      </div>
    </main>
  );
}

export default Home;
