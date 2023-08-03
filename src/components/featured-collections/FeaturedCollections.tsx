import React from 'react';
import {CollectionItem, ICollection} from "@/components/featured-collections/CollectionItem";
import {constantCollections} from "@/data/constants";

const collections: ICollection[] = constantCollections;

export const FeaturedCollections = () => {
    return (
        <section>
            <div className="container pt-12">
                <h2 className="leading-text text-2xl lg:text-4xl xl:text-4.5xl font-semibold mb-8 text-gray">

                    Categories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 auto-rows-fr text-white">
                    {collections.map((collection, index) => (
                        <CollectionItem key={index} image={collection.image} title={collection.title}
                                        subtitle={collection.subtitle} link={collection.link}/>
                    ))}
                </div>
                <div
                    className="bg-gray-400 bg-cover bg-center rounded-20 overflow-hidden px-10 py-16 flex justify-end w-full text-white
                  min-h-256 md:min-h-340 2xl:min-h-414"

                    style={{backgroundImage: 'url("/featured-image.png")'}}
                >
                    <div className="lg:max-w-[55%] h-i flex flex-col justify-between items-start">
                        <h3 className="leading-title text-3xl lg:text-4.5xl xl:text-5xl 2xl:text-5.5xl font-normal ">
                            Sk8ology Backed fundraisers/projects
                        </h3>
                        <a
                            className="bg-white leading-text text-sm lg:text-base xl:text-lg py-[1.1em] px-[2.77em] text-black rounded-xl"
                            href="#"
                        >

                            To Support
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}