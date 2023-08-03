import React from 'react';
import styles from './Gallery.module.scss'
import {GalleryItem, IGalleryItem} from "./GalleryItem";


export const Gallery = ({items}: { items: IGalleryItem[] }) => {
    return (
        <section className="my-16 xl:mb-24">
            <div className={`container ${styles.gallery_container}`}>
                {items.map((item, index) => (
                    <GalleryItem item={item} key={index}/>
                ))}
            </div>

        </section>
    )
};