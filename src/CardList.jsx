import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentCard from './ContentCard';

class CardList extends Component {
  cardElements() {
    const {cards} = this.props;

    return cards.map(card => {
      return (
        <ContentCard key={card} card={card} />
      )
    })
  }

  render() {
    return (
      <span>
        {this.cardElements()}
      </span>
    );
  }
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(String).isRequired,
};

export default CardList;
