import React from 'react';
import collections from "@/data/collections.json";
import {ICollectionData} from "@/pages/collections/[slug]";
import {ProductList} from "@/components/product-list/ProductList";
import Image from "next/image";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";

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

const Arrow = () => (
    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3.64645 4.35355C3.84171 4.54882 4.15829 4.54882 4.35355 4.35355L7.53553 1.17157C7.7308 0.976311 7.7308 0.659728 7.53553 0.464466C7.34027 0.269204 7.02369 0.269204 6.82843 0.464466L4 3.29289L1.17157 0.464466C0.976311 0.269204 0.659728 0.269204 0.464466 0.464466C0.269204 0.659728 0.269204 0.976311 0.464466 1.17157L3.64645 4.35355ZM3.5 3L3.5 4L4.5 4L4.5 3L3.5 3Z"
            fill="#454551"/>
    </svg>

)


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

                            <div>
                                <Accordion className="w-full">
                                    <AccordionItem>
                                        {({open}: { open: boolean }) => (
                                            <>
                                                <AccordionHeader
                                                    className=" flex justify-between items-center w-full border-t border-b border-solid border-gray-700 py-4">
                                                    <div className="flex items-center gap-2.5">
                                                        <svg width="16" height="19" viewBox="0 0 16 19" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M11.4737 1.92714C11.4737 0.862811 10.6109 0 9.54654 0H6.55872C5.49439 0 4.63158 0.862811 4.63158 1.92714C4.63158 2.89994 3.86421 3.69143 2.92105 3.69143H1.83925C0.823463 3.69143 0 4.51489 0 5.53068V5.70053C0 6.09434 0.161065 6.47103 0.445789 6.7431C1.19858 7.46244 2.61316 7.44154 2.61316 9.5C2.61316 11.5585 1.19863 11.5376 0.445842 12.2569C0.161085 12.529 0 12.9057 0 13.2995V13.4694C0 14.4851 0.823442 15.3086 1.83921 15.3086H2.92105C3.86421 15.3086 4.63158 16.1001 4.63158 17.0729C4.63158 18.1372 5.49439 19 6.55872 19H9.54654C10.6109 19 11.4737 18.1372 11.4737 17.0729C11.4737 16.1001 12.241 15.3086 13.1842 15.3086H14.1608C15.1766 15.3086 16 14.4851 16 13.4694V13.2995C16 12.9057 15.8389 12.529 15.5542 12.2569C14.8014 11.5376 13.3868 11.5584 13.3868 9.49994C13.3868 7.44148 14.8014 7.46239 15.5542 6.74305C15.8389 6.47097 16 6.09427 16 5.70043V5.5306C16 4.51485 15.1766 3.69143 14.1608 3.69143H13.1842C12.241 3.69143 11.4737 2.89994 11.4737 1.92714ZM14.9474 5.69271C14.9474 5.78862 14.9081 5.88036 14.8388 5.94662C13.8826 6.86036 12.3342 7.15551 12.3342 9.5C12.3342 11.8445 13.8826 12.1396 14.8388 13.0534C14.9082 13.1196 14.9474 13.2114 14.9474 13.3073V13.4763C14.9474 13.8886 14.6132 14.2229 14.2009 14.2229H13.1843C11.6607 14.2229 10.4211 15.5013 10.4211 17.0729C10.4211 17.5376 10.0444 17.9143 9.57968 17.9143H6.52569C6.06098 17.9143 5.68426 17.5376 5.68426 17.0729C5.68426 15.5013 4.44474 14.2229 2.92111 14.2229H1.79914C1.38686 14.2229 1.05263 13.8886 1.05263 13.4763V13.3073C1.05263 13.2114 1.09186 13.1196 1.16121 13.0534C2.11737 12.1396 3.66579 11.8445 3.66579 9.5C3.66579 7.15551 2.11742 6.86036 1.16121 5.94662C1.09186 5.88036 1.05263 5.78862 1.05263 5.69271V5.52365C1.05263 5.11137 1.38686 4.77714 1.79914 4.77714H2.92105C4.44468 4.77714 5.68421 3.49866 5.68421 1.92714C5.68421 1.46243 6.06093 1.08571 6.52564 1.08571H9.57963C10.0443 1.08571 10.4211 1.46243 10.4211 1.92714C10.4211 3.49866 11.6606 4.77714 13.1842 4.77714H14.2009C14.6131 4.77714 14.9474 5.11137 14.9474 5.52365V5.69271Z"
                                                                fill="#454551"/>
                                                        </svg>
                                                        <h3 className={`accordion-title text-left text-base 2xl:text-lg`}>Materials</h3>
                                                    </div>
                                                    <div className={`${open ? "rotate-180" : ""} transition-all`}>
                                                        <Arrow/>
                                                    </div>


                                                </AccordionHeader>

                                                <AccordionBody>
                                                    <div className="accordion-body text-lg 2xl:text-xl">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                                                        consectetur deleniti, deserunt eligendi esse minima non
                                                        similique ullam vitae voluptatem.
                                                    </div>
                                                </AccordionBody>
                                            </>
                                        )}
                                    </AccordionItem>

                                    <AccordionItem>
                                        {({open}: { open: boolean }) => (
                                            <>
                                                <AccordionHeader
                                                    className=" flex justify-between items-center w-full border-t border-b border-solid border-gray-700 py-4 -mt-[1px]">
                                                    <div className="flex items-center gap-2.5">
                                                        <svg width="19" height="22" viewBox="0 0 19 22" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M5.65114 9.21093L7.19083 10.1265M8.24086 3.97821L9.78055 4.89376M2.28944 13.9863L3.82913 14.9018M4.27599 11.5209L6.58553 12.8942M7.024 6.9014L9.33353 8.27474M3.69889 19.3541C2.12429 18.4178 1.33698 17.9496 1.13867 17.1695C0.940386 16.3895 1.40855 15.6022 2.34487 14.0275L8.3036 4.00676C9.23994 2.43214 9.70811 1.64483 10.4881 1.44654C11.2683 1.24823 12.0556 1.71639 13.6301 2.65274L15.3003 3.64587C16.8749 4.58219 17.3017 4.71995 17.5 5.5C17.6983 6.28005 17.2301 7.06736 16.2938 8.64203L10.3351 18.6627C9.39871 20.2374 8.93055 21.0247 8.1505 21.223C7.37045 21.4213 6.94365 21.2835 5.36903 20.3472L3.69889 19.3541Z"
                                                                stroke="#454551" stroke-linecap="round"/>
                                                        </svg>

                                                        <h3 className={`accordion-title text-left text-base 2xl:text-lg`}>Dimensions</h3>
                                                    </div>
                                                    <div className={`${open ? "rotate-180" : ""} transition-all`}>
                                                        <Arrow/>
                                                    </div>


                                                </AccordionHeader>

                                                <AccordionBody>
                                                    <div className="accordion-body text-lg 2xl:text-xl">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                                                        consectetur deleniti, deserunt eligendi esse minima non
                                                        similique ullam vitae voluptatem.
                                                    </div>
                                                </AccordionBody>
                                            </>
                                        )}
                                    </AccordionItem>
                                </Accordion>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
            <ProductList title="You may also like" products={collection.Also_Like}/>
        </>
    );
};

export default Page;