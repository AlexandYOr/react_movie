import React, { Component } from "react";
import { Card } from "./Card";

export function Cards(props) {
    const { cards } = props
    return (
        cards.length ? cards.map((card) => <Card key={card.imdbID} data={card} />) : <div className="not-found">По вашему запросу ничего не найдено</div>
    )
}