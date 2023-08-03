import React from 'react';
import Link from "next/link";
export interface ICollection {
    link?: string;
    image: string;
    subtitle?: string;
    title?: string;
}
export const CollectionItem = (props: ICollection) => (
    <Link
        className="bg-gray-400 bg-cover bg-center rounded-20 overflow-hidden p-9 flex flex-col justify-between
                  min-h-340 lg:min-h-414 xl:min-h-500 2xl:min-h-645"
        href={props.link? props.link : "#"}
        style={{backgroundImage: `url("${props.image}")`}}
    >
        <h4 className="leading-text font-semibold text-base lg:text-lg xl:text-xl uppercase mb-10">

            {props.subtitle}
        </h4>
        <h3 className="leading-title text-3xl lg:text-4.5xl xl:text-5xl 2xl:text-5.5xl font-normal ">
            {props.title}
        </h3>
    </Link>
);