import React from 'react';
import {IArticle} from "./BlogSection";

const SvgArrow = ({fill} : {fill: string}) => (
    <svg
        width={17}
        height={14}
        viewBox="0 0 17 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M0.510254 11.9587C0.0319613 12.2348 -0.131914 12.8464 0.144229 13.3247C0.420371 13.803 1.03196 13.9669 1.51025 13.6907L0.510254 11.9587ZM16.9574 4.43411C17.1003 3.90065 16.7838 3.35231 16.2503 3.20937L7.55697 0.879996C7.0235 0.737054 6.47516 1.05364 6.33222 1.5871C6.18928 2.12057 6.50586 2.66891 7.03933 2.81185L14.7667 4.8824L12.6962 12.6098C12.5532 13.1433 12.8698 13.6916 13.4033 13.8346C13.9368 13.9775 14.4851 13.6609 14.628 13.1274L16.9574 4.43411ZM1.51025 13.6907L16.4915 5.04132L15.4915 3.30927L0.510254 11.9587L1.51025 13.6907Z"
            fill={fill}
        />
    </svg>

)

const BlogPost = ({ article } : {article: IArticle}) => {
    return (
        <>
        {!article.additional?
        <a
            className="bg-gray-400 bg-cover bg-center rounded-20 overflow-hidden py-4 px-3.5 flex flex-col justify-between text-white relative news-card min-h-144 lg:min-h-176 xl:min-h-208 2xl:min-h-256"
            href={article.link}
            style={{ backgroundImage: `url(${article.image})` }}
        >
            <div className="absolute top-0 left-0 w-full h-full cards-overlay text-transparent"></div>
            <h4 className="leading-text font-semibold text-xs uppercase mb-10 py-1.5 px-2.5 border border-solid border-white rounded-md w-fit">
                {article.created_at}
            </h4>
            <h3 className="leading-title text-2xl lg:text-3xl xl:text-4xl 2xl:text-4.5xl font-normal pr-11">
                {article.title}
            </h3>
            <div className="rounded-full py-4 px-3 arrow border border-solid border-white">
                <SvgArrow fill="white"/>
            </div>
        </a>
        :
            <a
                className="bg-solid-color bg-cover bg-center rounded-20 overflow-hidden py-4 px-3.5 flex flex-col justify-between text-white relative news-card min-h-144 lg:min-h-176 xl:min-h-208 2xl:min-h-256"
                href="#"
            >
                <div className="absolute top-0 left-0 w-full h-full cards-overlay text-transparent"></div>
                <h4 className="leading-text font-semibold text-xs uppercase mb-10 py-1.5 px-2.5 border border-solid border-white rounded-md w-fit opacity-0 pointer-events-none">
                    25-07-2023
                </h4>
                <h3 className="leading-title text-2xl lg:text-3xl xl:text-4xl 2xl:text-4.5xl font-normal pr-11">
                    Other news
                </h3>
                <div className="rounded-full py-4 px-3 arrow border border-solid border-white bg-white">
                    <SvgArrow  fill="black"/>
                </div>
            </a>
        }
        </>
    );
};

export default BlogPost;