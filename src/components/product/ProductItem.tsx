import React from 'react';
import {IProduct} from "@/components/product-list/ProductList";
import Image from "next/image";
import Link from "next/link";

export const ProductItem = ({product}: { product: IProduct }) => {
    return (
        <Link href="/product" className="rounded-xl border border-solid border-gray p-4 block">
            <div className="w-full pt-[56.4%] relative">
                <Image src={product.image} alt={product.title + product.price} width={320} height={175}
                       className="absolute top-0 left-0 w-full h-full  object-cover"/>
            </div>
            <div className="px-2.5 pt-2.5 pb-11">
                {product.tags && (
                    <div className="flex flex-wrap gap-1"> {product.tags.map((tag, index) => {
                        return (
                            <h4 key={index}
                                className="leading-text font-semibold text-xs uppercase mb-10 py-1.5 px-2.5 border border-solid border-gray rounded-md w-fit cursor-pointer">
                                {tag}
                            </h4>
                        )
                    })} </div>
                )}
                <h2 className="leading-text  text-base lg:text-xl xl:text-2xl font-semibold mb-2.5"> {product.title} </h2>
                <h3 className="leading-text  text-base lg:text-xl xl:text-2xl"> {product.price} </h3>


            </div>
        </Link>
    )
}