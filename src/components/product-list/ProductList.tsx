import React from 'react';
import {ProductItem} from "@/components/product/ProductItem";

export interface IProduct {
    title: string,
    price?: string,
    image: string,
    tags?: string[]
}

export const ProductList = ({title, products}: { title: string, products: IProduct[] }) => {
    return (
        <section className="my-20">
            <div className="container">
                <h2 className="leading-text text-2xl lg:text-4xl xl:text-4.5xl font-semibold mb-4 text-gray">
                    {title}
                </h2>

                {products.length > 0 && (
                    <div className="flex flex-wrap">
                        {products.map(product => (
                            <div className=" basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-2.5"
                                 key={product.title + product.price}>
                                <ProductItem product={product}/>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}