import React from 'react';
import {Hero} from "@/components/hero/Hero";
import {constantArticles, constantBoards} from "@/data/constants";
import {IBoard} from "@/components/hero/Boards";
import {FeaturedCollections} from "@/components/featured-collections/FeaturedCollections";
import {BlogSection, IArticle} from "@/components/news-section/BlogSection";


const boards: IBoard[] = constantBoards;
const articles : IArticle[] = constantArticles;

const Home: React.FC = () => {
    return (
        <>
            <Hero title="Unleashing the Art of Skateboarding"
                  subtitle="We developed the original deck display to honor the history, creativity and lifestyle of skateboarding"
                  boards={boards}/>
            <FeaturedCollections/>
            <BlogSection title="News" postLimit={6} blogArticles={articles} />
        </>
    );
};

export default Home;