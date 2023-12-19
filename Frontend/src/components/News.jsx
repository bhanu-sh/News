import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const News = () => {

  const { id } = useParams();
  const [newsData, setNewsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/news/getbyid/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setNewsData(data);
          console.log(data.name);
        } else {
          navigate("/404");
        }
      } catch (error) {
        console.error("Error fetching news data:", error);
        navigate("/404");
      }
    };

    fetchData();
  }, [id, navigate]);

  if (!newsData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-5">
      <div className="container pt-5">
        <h1>
          {newsData.newsTitle}
        </h1>
        {newsData.newsImage ? 
        <img
          src={newsData.newsImage}
          alt="news"
          className="img-fluid"
        />
        : null}
        <p>{newsData.newsContent}</p>
      </div>
    </div>
  );
};

export default News;
