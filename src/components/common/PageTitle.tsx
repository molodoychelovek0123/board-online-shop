import React from "react";

export const PageTitle = ({title, description, image}: { title: string, description: string, image?: string }) => {
    return (
        <div className={`p-10 md:p-16 bg-cover mb-16 xl:mb-24 lg:min-h-550 ${image ? "" : "bg-solid-color"} `} style={{backgroundImage: `url("${image}")`}}>

            <div className="container">
                <div className="max-w-5xl flex flex-col md:flex-row justify-between">
                    <h1 className="font-bold text-white text-center leading-title responsive_text md:pr-20 pb-10" style={{
                        "--small-size": "30",
                        "--phone-size": "38",
                        "--tablet-size": "56",
                        "--desktop-size": "64"
                    } as React.CSSProperties}> {title} </h1>
                    <div className="md:max-w-md">
                        <h2 className="text-white leading-text text-base xl:text-xl pb-3.5 md:pb-4 xl:pb-5">Description</h2>
                        <p className="text-white leading-text text-lg xl:text-2xl">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}