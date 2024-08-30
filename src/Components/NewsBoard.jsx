// import { useEffect } from "react"
// import { useState } from "react"
// import NewsItem from "./NewsItem"

// const NewsBoard = () => {

//     const [articles,setArticles] = useState([])
//     useEffect(() =>{
//         let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
//         // Now Fetch the url
//         fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
//     },[])

//     return (
//       <div>
//         <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
//         {articles.map((news,index) => {
//             return <NewsItem key = {index} title = {news.title} description = {news.description} src = {news.urlToImage} url = {news.url}/>
//         })}
//       </div>
//     )
//   }
  
//   export default NewsBoard

import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null); // Reset error before making a new request
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch news");
        const data = await response.json();
        setArticles(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">{category.toUpperCase()}</span> News
      </h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-danger">Error: {error}</p>
      ) : (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      )}
    </div>
  );
};

export default NewsBoard;
