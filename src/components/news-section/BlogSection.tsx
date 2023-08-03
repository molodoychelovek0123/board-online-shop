import React from 'react';
import FirstBlogPost from './FirstBlogPost';
import BlogPost from './BlogPost';

export interface IArticle {
    title: string;
    link: string;
    created_at: string;
    image: string;
    additional?: boolean;
}
interface IBlogSectionProps {
    title: string;
    postLimit: 3|6|9|12|15;
    blogArticles: IArticle[];
}

export const BlogSection = ({ title, postLimit, blogArticles } : IBlogSectionProps) => {
    const firstArticle = blogArticles[0];

    return (
        <section>
            <div className="container pt-24">
                <h2 className="leading-text text-2xl lg:text-4xl xl:text-4.5xl font-semibold mb-4 text-gray">
                    {title}
                </h2>
                <div className="news-container gap-5">
                    {firstArticle && <FirstBlogPost article={firstArticle} />}

                    {blogArticles.slice(1, postLimit).map((article, index) => (
                        <BlogPost key={index} article={article} />
                    ))}

                    {/* Additional news placeholder */}
                    <BlogPost key={blogArticles.length + 1} article={
                        {title: "", link: "", created_at: "", image: "", additional: true}
                    } />
                </div>
            </div>
        </section>
    );
};
