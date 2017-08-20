import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentCard from './ContentCard';

class CardList extends Component {
  cardElements() {
    const {classes, cards} = this.props;

    return cards.map(card => {
      return (
        <ContentCard card={card} />
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
  classes: PropTypes.object.isRequired,
  cards: PropTypes.arrayOf(String).isRequired,
};

export default CardList;
