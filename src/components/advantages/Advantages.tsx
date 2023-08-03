import React from 'react';
import {AdvantageItem, IAdvantageItem} from "./AdvantageItem";

export const Advantages = ({items} : {items: IAdvantageItem[]}) => {
    return (
        <section>
            <div className="container flex flex-col md:flex-row justify-around py-24">
                {items.map((item, index) => (
                    <AdvantageItem advantage={item} key={index}/>
                ))}
            </div>
        </section>
    )
}