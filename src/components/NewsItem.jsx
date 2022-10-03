import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;

    return (
      <a href={newsUrl} target="_blank" style={{ textDecoration: "none" }}>
        <div className="my-3">
          <div className="card">
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body" style={{backgroundColor: "rgb(40,40,40)"}}>
              <h5 className="card-title" style={{ color: "black" }}>
                {title} ....
              </h5>
              <p className="card-text" style={{ color: "rgb(50,50,50)" }}>
                {description} ....
              </p>
              {date && (
                <p className="card-text">
                  <small className="text-muted">
                    {new Date(date).toGMTString()}
                  </small>
                </p>
              )}
              Read More ..
              <div className="card-img-overlay">
                {source.name && (
                  <p className="card-text">
                    <small
                      style={{
                        backgroundColor: "grey",
                        color: "white",
                        borderRadius: "5px",
                        padding: "5px",
                      }}
                    >
                      {source.name}
                    </small>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }
}

export default NewsItem;
