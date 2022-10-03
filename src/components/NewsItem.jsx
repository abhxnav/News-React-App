import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;

    return (
      <a href={newsUrl} target="_blank" style={{ textDecoration: "none" }}>
        <div className="my-3">
          <div className="card" style={{ height: "100%" }}>
            <img
              src={imageUrl}
              className="card-img-top"
              alt="..."
              style={{ height: "250px", backgroundColor: "#404040" }}
            />
            <div className="card-body " style={{ backgroundColor: "#404040" }}>
              <h5 className="card-title" style={{ color: "white" }}>
                {title} ....
              </h5>
              <p className="card-text" style={{ color: "#D7CEC7" }}>
                {description} ....
              </p>
              {date && (
                <p className="card-text">
                  <small style={{ color: "#D7CEC7" }}>
                    {new Date(date).toGMTString()}
                  </small>
                </p>
              )}
              <p style={{ color: "white" }}>Read More..</p>
              <div className="card-img-overlay">
                {source.name && (
                  <p className="card-text">
                    <small
                      style={{
                        backgroundColor: "#76323F",
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
