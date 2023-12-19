import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const Home = () => {
  const [newsData, setNewsData] = useState([]);

  const fetchNewsData = async () => {
    const res = await fetch("http://localhost:5000/news/getall");
    console.log(res.status);

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setNewsData(data);
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <div className="vh-100">
      <div className="container pt-5">
        <div className="row mt-5 ">
          <div className="col-md-8">
            <ReactPlayer url="https://www.youtube.com/watch?v=1fXA75_pGJc" playing="true" pip="true" muted="true" style={
              {
                maxWidth: "100%",
                maxHeight: "30vh",
                objectFit: "cover",
                boxShadow: "0px 0px 10px 0px black",
                
              }
            } />
            <table className="table mt-4">
              <tbody className="">
                {newsData.map((news) => {
                  return (
                    <tr>
                      <Link to={`/news/${news._id}`}>
                        <td>
                          <img
                            src={news.newsImage ? news.newsImage : "/news.png "}
                            alt="news"
                            className="img-fluid"
                          />
                        </td>
                        <td>
                          <h3>{news.newsTitle}</h3> <br />
                          <p>{news.newsContent} ... Read More</p>
                        </td>
                      </Link>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="vh-100"></div>
            <div className="vh-100"></div>
            <div className="vh-100"></div>

          </div>

          <div className="col-md-4">Right</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
