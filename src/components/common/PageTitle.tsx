import React from "react";

export const PageTitle = ({title, description, image}: { title: string, description: string, image?: string }) => {
    return (
            <div className={`p-16 bg-cover ${image? "" : "bg-solid-color"} `} style={{backgroundImage: `url("${image}")`}}>
                <div className="max-w-5xl flex flex-col md:flex-row justify-between">
                    <h1 className="font-bold text-white text-center leading-title responsive_text" style={{
                        "--small-size": "30",
                        "--phone-size": "38",
                        "--tablet-size": "56",
                        "--desktop-size": "64"
                    } as React.CSSProperties}> {title} </h1>
                    <div>
                        <h2 className="text-white leading-text text-base xl:text-xl">Description</h2>
                        <p className="text-white leading-text text-lg xl:text-2xl">{description}</p>
                    </div>
                </div>
            </div>
    );
}