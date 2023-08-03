import React from 'react';
import Image from "next/image";
import {motion} from "framer-motion";
import styles from './Gallery.module.scss'

export interface IGalleryItem {
    link: string;
    alt?: string;
}

// <motion.div onClick={()=>{setIsOpen(!isOpen)}} className={`${isOpen? "fixed top-0 left-0 z-50 w-full h-full bg-black/50" : "relative"}`}>
// <Image src={item.link}
//        alt={item.alt ? item.alt : `Sk8ology gallery photo`}
//        sizes="(max-width: 1280px) 100vw, 512px"
//        placeholder="blur"
//        blurDataURL="/blur-image.png"
//        fill={true}
//        className="object-cover rounded-20"/>
export const GalleryItem = ({item}: { item: IGalleryItem }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [bgOpen, setBgOpen] = React.useState(false);
    const clickHandler = () => {

        setIsOpen(!isOpen)
        if (bgOpen)
            setBgOpen(!bgOpen)
        else
            setTimeout(() => {

                setBgOpen(!bgOpen)
            }, 300);
    }


    return (
        <motion.div layout onClick={clickHandler}
                    className={`${styles.gallery_item} ${isOpen ? "fixed top-0 left-0  h-full w-full " + styles.active : "relative"}
         ${bgOpen && isOpen ? "bg-black/50" : ""}
         ${isOpen ? "z-50" : ""}`}>
            <Image src={item.link}
                   alt={item.alt ? item.alt : `Sk8ology gallery photo`}
                   sizes="100vw"
                   placeholder="blur"
                   blurDataURL="/blur-image.png"
                   fill={true}
                   className={`${isOpen ? "object-contain z-50" : "object-cover"} rounded-20 `}/>
        </motion.div>
    )
}