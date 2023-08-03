import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

export interface IHeaderLink {
    url: string;
    text: string;
}

const CartIcon = () => (
    <svg
        width={40}
        height={41}
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx={20} cy="20.002" r="19.5" stroke="white"/>
        <path
            d="M15.8571 29.002C16.3305 29.002 16.7143 28.6182 16.7143 28.1448C16.7143 27.6714 16.3305 27.2877 15.8571 27.2877C15.3838 27.2877 15 27.6714 15 28.1448C15 28.6182 15.3838 29.002 15.8571 29.002Z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M25.2859 29.002C25.7592 29.002 26.143 28.6182 26.143 28.1448C26.143 27.6714 25.7592 27.2877 25.2859 27.2877C24.8125 27.2877 24.4287 27.6714 24.4287 28.1448C24.4287 28.6182 24.8125 29.002 25.2859 29.002Z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M9 11.002H12.4286L14.7257 22.4791C14.8041 22.8737 15.0188 23.2282 15.3322 23.4805C15.6456 23.7328 16.0377 23.8668 16.44 23.8591H24.7714C25.1737 23.8668 25.5658 23.7328 25.8792 23.4805C26.1927 23.2282 26.4073 22.8737 26.4857 22.4791L27.8571 15.2877H13.2857"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>

)

const SearchIcon = () => (
    <svg
        width={40}
        height={41}
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx={20} cy="20.002" r="19.5" stroke="white"/>
        <circle cx="21.25" cy="17.752" r="6.25" stroke="white"/>
        <path d="M17.5 23.0023L13 29.0023" stroke="white" strokeLinecap="round"/>
    </svg>

)

const FavoriteIcon = () => (
    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20.002" r="19.5" stroke="white"/>
        <path
            d="M27.4176 13.7806C26.5109 12.78 25.2821 12.4047 24.0063 12.5229C22.7152 12.6426 21.3908 13.2699 20.3766 14.2547C20.374 14.2572 20.3692 14.262 20.3643 14.2667C20.3582 14.2725 20.3439 14.2859 20.3249 14.3009C20.2971 14.323 20.1822 14.4125 20.0065 14.4125C19.8313 14.4125 19.7167 14.3234 19.6892 14.3018C19.6703 14.2869 19.656 14.2736 19.6499 14.2678C19.644 14.2622 19.6382 14.2565 19.6363 14.2547L19.636 14.2543L27.4176 13.7806ZM27.4176 13.7806L27.4316 13.7962C29.1029 15.6594 28.6922 18.3816 27.0268 20.5607L27.0268 20.5607C25.8746 22.0686 24.1318 23.796 22.6205 25.1982C21.8678 25.8966 21.178 26.5093 20.6557 26.9678C20.4867 27.1162 20.3317 27.2514 20.1967 27.3691C20.129 27.4282 20.0663 27.4829 20.0093 27.5327C19.9529 27.4823 19.8905 27.4267 19.823 27.3665C19.6864 27.2447 19.5287 27.104 19.3555 26.9489C18.8297 26.4777 18.1355 25.8496 17.3795 25.1407C15.8618 23.7174 14.1159 21.9873 12.981 20.5539L12.9802 20.553C11.287 18.4249 10.9064 15.6637 12.5813 13.7962L27.4176 13.7806ZM20.3382 27.8318C20.3438 27.837 20.3448 27.8383 20.3383 27.8318L20.3382 27.8318ZM19.676 27.8306L19.676 27.8306C19.6694 27.8371 19.6705 27.8358 19.676 27.8306Z"
            stroke="white"/>
    </svg>
);

export const Header = ({links}: { links: IHeaderLink[] }) => {
    return (
        <div className="fixed w-full z-50">
            <header className="bg-transparent -mb-[100%] relative">
                <div className="container ">
                    <div className="flex justify-between items-center">
                        <Link href="/" className="block select-none h-full w-auto">
                            <Image src="/sk8-logo.svg" alt="sk8ology logo" width={220} height={50}/>
                        </Link>
                        {links &&
                            <nav>
                                <ul className="flex">
                                    {links.map((link, index) => (
                                        <li key={link.url}
                                            id={`HeaderMenu-${index}`}>
                                            <Link href={link.url}
                                                  className="mx-3 md:mx-4 lg:mx-5 xl:mx-6 text-sm md:text-base lg:text-lg text-white font-semibold">{link.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        }

                        <div className="flex gap-1 xl:gap-2.5 items-center">
                            {[CartIcon, SearchIcon, FavoriteIcon].map((Icon, index) => (
                                <Link href="#"
                                      key={index}
                                      id={`HeaderIcon-${index}`}
                                      className="h-10 w-10 list-none cursor-pointer text-white rounded-full border border-solid border-white header__icon header__icon--cart link focus-inset">
                                    <Icon/>
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>

            </header>
        </div>
    );
}
