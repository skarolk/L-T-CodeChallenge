import React from "react";
import Card from "./Card";

export default class InfoCards extends React.Component {
  renderCard = () => {
    const { data } = this.props;
    console.log(data);
    return data.map(cardInfo => {
      return <Card info={cardInfo} key={cardInfo.title} />;
    });
  };

  render() {
    console.log(this.props);

    return <React.Fragment>{this.renderCard()}</React.Fragment>;
  }
}
