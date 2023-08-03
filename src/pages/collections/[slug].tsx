import React from 'react';
import {useRouter} from "next/router";
import {PageTitle} from "@/components/common/PageTitle";
import {Gallery} from "@/components/gallery/Gallery";
import collections from '@/data/collections.json';
import {IGalleryItem} from "@/components/gallery/GalleryItem";
import {IProduct, ProductList} from "@/components/product-list/ProductList";

interface ICollection {
    title: string,
    description: string,
    bannerImage: string,
    gallery: IGalleryItem[],
    products: IProduct[],
    Also_Like: IProduct[]
}

const Page: React.FC = () => {
    const router = useRouter()
    const {slug} = router.query

    const isSlugValid = (slug: string): slug is keyof typeof collections => {
        return slug in collections;
    };

    if (!slug || !isSlugValid(slug as string)) {
        return <h1 className="py-96 text-center text-5.5xl">Collection not found</h1>;
    }
    // @ts-ignore
    const collection: ICollection = collections[slug];


    return (
        <div className="pt-32">
            <PageTitle title={collection.title}
                       description={collection.description}
                       image={collection.bannerImage}/>
            <Gallery items={collection.gallery}/>
            <ProductList title={collection.title} products={collection.products}/>
        </div>
    )
}

export default Page;