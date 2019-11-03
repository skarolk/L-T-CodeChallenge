import React from "react";
import Card from "./Card";

export default class InfoCards extends React.Component {
  // creating each card
  renderCard = () => {
    // deconstructing props
    const { data } = this.props;

    return data.map(cardInfo => {
      return <Card info={cardInfo} key={cardInfo.title} />;
    });
  };

  render() {
    return <React.Fragment>{this.renderCard()}</React.Fragment>;
  }
}
