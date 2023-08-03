import React from 'react';
import {PageTitle} from "@/components/common/PageTitle";

const Page: React.FC = () => {
    return (
        <PageTitle title={"About sk8"}
                   description={"The influence of skateboarding runs deep through the founders of the Sk8ology brand. We developed the original deck display to honor the history, creativity and lifestyle of skateboarding, and allow skateboarders, collectors, fans and artists, to exhibit their skateboards with elegance and style.\n" +
                       "The Carabiner Skate Tool adds to the mission of Sk8ology. An innovative, all purpose skate tool in an easily portable, light weight, carabiner design. Simply attaches to your belt loop or backpack and keeps essential tools on hand at all times to keep your set-up tuned and tight."}
                   image={"/about-page.jpg"}/>


    );
};

export default Page;