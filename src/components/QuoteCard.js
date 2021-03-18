import React from 'react';
import './QuoteCard.css';

class QuoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
    };
  }
  render() {
      const {quote, character, image} = this.props.props;
    return (
      <figure className="QuoteCard">
        <img src={image} alt={character} />
        <figcaption>
          <blockquote>{quote}</blockquote>
          <p>
            <cite>{character}</cite>
            <span
              className={this.state.favorite ? 'is-favorite' : ''}
              onClick={event => {
                const newFavorite = !this.state.favorite;
                this.setState({ favorite: newFavorite });
              }}
            >
              &#9733;
            </span>
          </p>
        </figcaption>
      </figure>
    );
  }
}

export default QuoteCard;