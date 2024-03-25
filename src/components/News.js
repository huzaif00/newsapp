import React, { useEffect, useState } from "react";
import NeswItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const [data, setArticles] = useState([]);
  const [page, setpage] = useState(1);
  const [totalResult, settotalResult] = useState(0);

  const updatenews = () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    fetch(url).then((res) => {
      res.json().then((result) => {
        setArticles(result.articles);
        settotalResult(result.totalResults);
      });
    });
  };
  const fetchMoreData = () => {

     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
     setpage(page+1)
    fetch(url).then((res) => {
      res.json().then((result) => {
        setArticles(data.concat(result.articles));
        settotalResult(result.totalResults);
      });
    });
  };
  useEffect(() => {
    updatenews();
  }, []);

  return (
    <>
      <h1 className="text-center" style={{marginTop:'60px'}}>Top Headlines</h1>

      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={data.length < totalResult}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {data
              ? data.map((element) => (
                  <div className="col-md-4" key={element.url}>
                    <NeswItem
                      title={element.title}
                      description={element.description}
                      imgurl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                ))
              : null}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
