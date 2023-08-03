import React from 'react';
import {IArticle} from "./BlogSection"

const FirstBlogPost = ({article}: { article: IArticle }) => {
    return (
        <div className="first">
            <div
                className="bg-gray-400 bg-cover bg-center rounded-20 overflow-hidden px-10 py-16 flex justify-end w-full text-white relative news-card min-h-256 md:min-h-340 2xl:min-h-414"
                style={{backgroundImage: `url(${article.image})`}}
            >
                <div className="absolute top-0 left-0 w-full h-full cards-overlay text-transparent"></div>
                <div className="lg:max-w-[55%] h-i flex flex-col justify-between items-start">
                    <h3 className="leading-title text-3xl lg:text-4.5xl xl:text-5xl 2xl:text-5.5xl font-normal">
                        {article.title}
                    </h3>
                    <a
                        className="bg-white leading-text text-sm lg:text-base xl:text-lg py-[1.1em] px-[2.77em] text-black rounded-xl"
                        href={article.link}
                    >
                        Read
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FirstBlogPost;