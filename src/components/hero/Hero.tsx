import React from 'react';
import {Boards, IBoard} from "@/components/hero/Boards";

export const Hero = ({title, subtitle, boards} : {title: string, subtitle: string, boards: IBoard[]}) => {
    return (
        <section className="bg-solid-color pt-20 lg:pt-32 max-w-full overflow-hidden hero-section">
            <div className="container flex justify-center">
                <div className="max-w-1xl">
                    <h1 className="font-bold text-white text-center responsive_text leading-title"
                        style={{
                            "--small-size": "30",
                            "--phone-size": "38",
                            "--tablet-size": "56",
                            "--desktop-size": "64"
                        } as React.CSSProperties}
                        >
                        {title}
                    </h1>
                    <p className="leading-text text-white text-center responsive_text mt-4"
                       style={{
                           "--small-size": "8",
                           "--phone-size": "14",
                           "--tablet-size": "20",
                           "--desktop-size": "24"
                       } as React.CSSProperties}
                       >
                        {subtitle}
                    </p>
                </div>

            </div>
            <Boards blocks={boards}/>
        </section>
    )
}