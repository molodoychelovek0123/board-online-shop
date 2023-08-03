import React from 'react';
import Image from "next/image";

export interface IAdvantageItem {
    icon_link?: string;
    title?: string;
    description?: string;
}

export const AdvantageItem = ({advantage}: { advantage: IAdvantageItem }) => {
    return (
        <div className="flex flex-col gap-4 md:basis-custom py-2">
            {advantage.icon_link &&
                <Image className="h-12 w-12" src={advantage.icon_link} alt={advantage.title ? advantage.title : "Icon"} width={50} height={50}/>
            }
            <h3 className="responsive_text leading-title font-semibold" style={{
                "--small-size": "20",
                "--phone-size": "25",
                "--tablet-size": "35",
                "--desktop-size": "40"
            } as React.CSSProperties}>{advantage.title}</h3>
            <p className="leading-text text-sm md:text-base xl:text-lg"> {advantage.description}</p>
        </div>
    )
}