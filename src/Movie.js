import React from "react";

class MovieCard extends React.Component {
  render() {
    //de-structuring
    const { image, title, rating, description, index } = this.props;
    console.log('index', index)
    return (
      <div className="container">
        <div className="image-section">
          <img src={image} />
        </div>
        <div className="about-section">
          <div className="title">
            <p>{title}</p>
          </div>
          <div className="rating">
            <p>IMDB: {rating}</p>
          </div>
          <div className="description">
            <p>
             {description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
