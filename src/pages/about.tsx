import React from 'react';
import {PageTitle} from "@/components/common/PageTitle";
import {Advantages} from "@/components/advantages/Advantages";
import {IAdvantageItem} from "@/components/advantages/AdvantageItem";
import {Gallery} from "@/components/gallery/Gallery";
import {IGalleryItem} from "@/components/gallery/GalleryItem";
import {constantAdvantages} from "@/data/constants";

const advantages: IAdvantageItem[] = constantAdvantages;

const galleryItems: IGalleryItem[] = [
    {
        link: "/gallery-images/gallery-1.jpg",
    },
    {
        link: "/gallery-images/gallery-2.jpg",
    },
    {
        link: "/gallery-images/gallery-3.jpg",
    }, {
        link: "/gallery-images/gallery-4.jpg",
    }
]

const Page: React.FC = () => {
    return (
        <div className="pt-32">
            <PageTitle title={"About sk8"}
                       description={"The influence of skateboarding runs deep through the founders of the Sk8ology brand. We developed the original deck display to honor the history, creativity and lifestyle of skateboarding, and allow skateboarders, collectors, fans and artists, to exhibit their skateboards with elegance and style.\n" +
                           "The Carabiner Skate Tool adds to the mission of Sk8ology. An innovative, all purpose skate tool in an easily portable, light weight, carabiner design. Simply attaches to your belt loop or backpack and keeps essential tools on hand at all times to keep your set-up tuned and tight."}
                       image={"/about-page.jpg"}/>
            <Advantages items={advantages}/>
            <Gallery items={galleryItems}/>
        </div>
    );
};

export default Page;