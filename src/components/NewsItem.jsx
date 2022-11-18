import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;

    return (
      <a
        href={newsUrl}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: 'none' }}
      >
        {/* <div className="my-3" style={{boxShadow: "coral 0px 0px 0px 2px, coral 0px 4px 6px -1px, coral 0px 1px 0px inset"}}> */}
        <div
          className="my-3"
          style={{
            boxShadow:
              'coral 0px 0.0625em 0.0625em, coral 0px 0.125em 0.5em, coral 0px 0px 0px 1px inset',
          }}
        >
          <div className="card" style={{ height: '500px', border: 'none' }}>
            <img
              src={imageUrl}
              className="card-img-top"
              alt="..."
              style={{ height: '250px', backgroundColor: 'rgb(50,50,50)' }}
            />
            <div
              className="card-body "
              style={{ backgroundColor: 'rgb(50,50,50)' }}
            >
              <h5 className="card-title" style={{ color: 'white' }}>
                {title} ....
              </h5>
              <p className="card-text" style={{ color: 'rgb(180,180,180)' }}>
                {description} ....
              </p>
              {date && (
                <p className="card-text">
                  <small
                    style={{ color: 'rgb(150,150,150)', fontWeight: 'bold' }}
                  >
                    {new Date(date).toGMTString()}
                  </small>
                </p>
              )}
              <div className="card-img-overlay">
                {source.name && (
                  <p className="card-text">
                    <small
                      style={{
                        backgroundColor: 'coral',
                        color: 'white',
                        borderRadius: '5px',
                        padding: '5px',
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
