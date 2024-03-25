import React from "react";

 const NewsItem =(props)=>  {

    let {title,description,imgurl,newsUrl,author,date}=props;
    return (
      <>
      <div className="my-3">
        <div className="card" >
          <img src={imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()} <i className="fa fa-angle-down" aria-hidden="true"></i></small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
        </div>
      </>
    );
  }


export default NewsItem;
