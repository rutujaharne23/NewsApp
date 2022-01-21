import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NewsItem extends Component {
  render() {
      let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return <div className='my-3'>
        <div className="card">
            <img src={!imageUrl?"https://images.hindustantimes.com/img/2022/01/20/1600x900/Breaking-News-Live-Blog-pic_1642639780664_1642639783697.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <span className="badge rounded-pill bg-info text-dark my-2">{source}</span>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {!author? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div>
    </div>;
  }
}

export default NewsItem;
