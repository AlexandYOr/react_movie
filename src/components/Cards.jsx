import React, { Component } from "react";
import { Card } from "./Card";
import { Preloader } from "./Preloader";

export class Cards extends Component {
    render() {
        const {cards} = this.props
        return (
            cards.length ? cards.map((card) => <Card key={card.imdbID} data={card}/>) : <div className="not-found">По вашему запросу ничего не найдено</div>
        )
    }
}