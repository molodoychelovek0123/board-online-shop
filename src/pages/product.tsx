import React from 'react';
import collections from "@/data/collections.json";
import {ICollectionData} from "@/pages/collections/[slug]";
import {ProductList} from "@/components/product-list/ProductList";
import Image from "next/image";

const images = [
    "/product-7.jpg",
    "/product-8.jpg",
    "/product-9.jpg",
]

const Minus = () => (
    <svg
        width={14}
        height={1}
        viewBox="0 0 14 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect opacity="0.7" width={14} height={1} fill="#454551"/>
    </svg>
);

const Plus = () => (
    <svg
        width={14}
        height={15}
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g opacity="0.7">
            <rect y={7} width={14} height={1} fill="#454551"/>
            <rect
                x="7.5"
                y="0.5"
                width={14}
                height={1}
                transform="rotate(90 7.5 0.5)"
                fill="#454551"
            />
        </g>
    </svg>
)

const Quantity = () => {
    const [quantity, setQuantity] = React.useState(1);
    const minus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    const plus = () => {
        setQuantity(quantity + 1);
    }
    return (
        <div
            className="px-3.5 xl:px-5 py-4 xl:py-6 inline-flex items-center justify-between border border-black rounded-xl min-w-120 xl:min-w-200">
            <div onClick={minus} className="cursor-pointer"><Minus/></div>
            <span className="font-semibold leading-text text-base lg:text-lg"> {quantity} </span>
            <div onClick={plus} className="cursor-pointer"><Plus/></div>
        </div>
    )
}

const collection: ICollectionData = collections["frame-kit"];
const Page: React.FC = () => {
    return (
        <>
            <div className="container pt-36">
                <div className="flex flex-col lg:flex-row">
                    <div className=" lg:basis-1/2 pb-4 lg:pr-5">
                        <div className="grid grid-cols-2 gap-2.5">
                            {images.map((image, index) => (
                                <React.Fragment key={index}>

                                    <div
                                        className={`${index == 0 ? "col-span-2" : ""} border border-solid border-gray-800 rounded-xl`}>
                                        <Image src={image} alt={"aa"} width={650} height={650}
                                               className="w-full h-auto object-contain"/>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    <div className="lg:basis-1/2 pt-4 lg:pl-5">
                        <h1 className="leading-text text-2xl lg:text-4xl xl:text-4.5xl font-extrabold mb-3.5 xl:mb-5">Sk8ology
                            frame kit white</h1>
                        <h2 className="leading-text text-base md:text-lg lg:text-xl xl:text-2xl mb-3.5 xl:mb-6"> $40,19 </h2>
                        <div>
                            <span
                                className="leading-text text-base lg:text-lg text-gray-700 block mb-2 xl:mb-2.5">Quantity</span>
                            <Quantity/>
                        </div>
                        <div className="max-w-352 mt-11">
                            <div className="mb-2.5">
                                <a
                                    className=" block text-center  bg-white leading-text text-sm lg:text-base xl:text-lg py-[1.1em] px-[2.77em] text-black rounded-xl border border-gray"
                                    href="#"
                                >
                                    Add to cart
                                </a>
                            </div>
                            <div className="mb-6">
                                <a
                                    className="block  text-center bg-solid-color leading-text text-sm lg:text-base xl:text-lg py-[1.1em] px-[2.77em] text-white rounded-xl border border-solid-color"
                                    href="#"
                                >
                                    Buy it now
                                </a>
                            </div>
                            <p className="leading-text text-base lg:text-lg text-gray-700 block mb-5 xl:mb-6">Sk8ology
                                Skateboard Deck Frame Kit for your vintage or new school Skateboard deck or Complete.
                                Sk8ology is the worldwide leader in professional skateboard display - We are the
                                original & the best.</p>
                            <h3 className="leading-text text-base lg:text-lg text-black-900 block mb-4 xl:mb-5">
                                Here{"\'"}s what the kit includes:
                            </h3>
                            <p className="leading-text text-base lg:text-lg text-gray-700 block mb-5 xl:mb-6">{`1. USA
                                made Black Gallery Frame 38" x 15" x 1.25" (This size effectively fits one vintage or
                                new school skateboard deck) like the frame in picture 2. USA made One pc of 3/8" x 37" x
                                14" plywood backboard3. USA made White Matboard 1/8" x 37" x 14"4. Two pcs of assembled
                                Sk8ology Display Hangers/Mounts (These are the fixtures that allow your decks to float
                                away from the wall - Since they are precisely secured to the deck & frame you can
                                display your kit either horizontally or vertically.)5. One Hanging clip, One drywall
                                anchor, One Mounting Screw6. One 7/32" Drill Bit`}</p>


                        </div>

                    </div>
                </div>

            </div>
            <ProductList title="You may also like" products={collection.Also_Like}/>
        </>
    );
};

export default Page;