import React, { Component } from "react";
import { NewsItem, Spinner } from "./components-index";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `BUZZ.. - ${this.capitalize(this.props.category)}`;
  }

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  async updateNews() {
    this.props.setProgress(70);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = () => {
    setTimeout(async () => {
      this.setState({ page: this.state.page + 1 });
      const url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
        loading: false,
      });
    }, 1500);
  };

  render() {
    return (
      <>
        <div style={{ backgroundColor: "rgb(50,50,50)", height: "80px" }}></div>
        {this.props.category === "general" ? (
          <h2 className="text-center" style={{ color: "white" }}>
            Top Headlines
          </h2>
        ) : (
          <h2 className="text-center" style={{ color: "white" }}>
            Top Headlines from the World of{" "}
            {this.capitalize(this.props.category)}
          </h2>
        )}
        {this.state.loading && (
          <div className="text-center my-5">
            <Spinner />
          </div>
        )}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={
            <div className="text-center my-5">
              <Spinner />
            </div>
          }
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((e, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <NewsItem
                      title={e.title ? e.title.slice(0, 100) : ""}
                      description={
                        e.description ? e.description.slice(0, 150) : ""
                      }
                      imageUrl={
                        e.urlToImage
                          ? e.urlToImage
                          : "https://static.dw.com/image/19265466_302.png"
                      }
                      newsUrl={e.url}
                      author={e.author}
                      date={e.publishedAt}
                      source={e.source}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;

/*
UNUSED CODE

* Prev and Next Buttons - 
{!this.state.loading && (
    <div className="container d-flex justify-content-between">
      <button
        type="button"
        className="btn btn-primary"
        onClick={this.handlePrevClick}
        disabled={this.state.page <= 1}
      >
        &larr; Previous
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={this.handleNextClick}
        disabled={
          this.state.page + 1 >
          Math.ceil(this.state.totalResults / this.props.pageSize)
        }
      >
        Next &rarr;
      </button>
    </div>

handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
)} 

*/
