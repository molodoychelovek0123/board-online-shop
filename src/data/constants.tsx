import {IHeaderLink} from "@/components/common/Header";
import {IBoard} from "@/components/hero/Boards";
import {ICollection} from "@/components/featured-collections/CollectionItem";
import {IArticle} from "@/components/news-section/BlogSection";
import {IAdvantageItem} from "@/components/advantages/AdvantageItem";

export const constantLinks: IHeaderLink[] = [
    {
        url: "/",
        text: "Home"
    },
    {
        url: "/about",
        text: "About"
    },
    {
        url: "/product",
        text: "Products"
    },
    {
        url: "/about",
        text: "Community"
    },
    {
        url: "/about",
        text: "How to Use"
    }
]

export const constantBoards: IBoard[] = [
    {
        id: 1,
        settings: {
            image: "/board-1.png"
        }
    },
    {
        id: 2,
        settings: {
            image: "/board-2.png"
        }
    },
    {
        id: 3,
        settings: {
            image: "/board-3.png"
        }
    },
    {
        id: 4,
        settings: {
            image: "/board-4.png"
        }
    },
    {
        id: 5,
        settings: {
            image: "/board-5.png"
        }
    },
    {
        id: 6,
        settings: {
            image: "/board-6.png"
        }
    },
    {
        id: 7,
        settings: {}
    },
    {
        id: 8,
        settings: {
            image: "/board-4.png"
        }
    },
    {
        id: 9,
        settings: {
            image: "/board-2.png"
        }
    },
]

export const constantCollections:ICollection[] = [
    {
        image: "/collection-1.jpg",
        link: "/frame-kit",
        title: "Show off your skateboards with elegance and style",
        subtitle: "frame kit",
    },
    {
        image: "/collection-2.jpg",
        link: "/snap-display",
        title: "Smart thoughts on favorite things",
        subtitle: "core frames",
    },
    {
        image: "/collection-3.jpg",
        link: "/deck-display",
        title: "Literally holding on to history and culture",
        subtitle: "deck displays",
    },
    {
        image: "/collection-4.jpg",
        link: "/holder",
        title: "A large collection of the most unusual art",
        subtitle: "FLOATING DECK",
    }
];

export const constantArticles: IArticle[] = [
    {
        title: "Thanks to Sk8ology for taking care of the Cole family household.",
        link: "#",
        created_at: "08.03.2023",
        image: "/article-1.jpg"
    },
    {
        title: "New collection of African art",
        link: "#",
        created_at: "03.03.2023",
        image: "/article-2.jpg"
    },
    {
        title: "Sk8ology store Highlights ",
        link: "#",
        created_at: "04.27.2023",
        image: "/article-3.jpg"
    },
    {
        title: "Most Extensive Selection ",
        link: "#",
        created_at: "04.27.2023",
        image: "/article-4.jpg"
    },
    {
        title: "Wall Frame & Tech Deck holder ",
        link: "#",
        created_at: "04.27.2023",
        image: "/article-5.jpg"
    },
    {
        title: "Sk8ology for your vintage or new school Skateboard deck  ",
        link: "#",
        created_at: "04.27.2023",
        image: "/article-6.jpg"
    }
]

export const constantAdvantages: IAdvantageItem[] = [
    {
        icon_link: "/selection.svg",
        title: "Most Extensive Selection",
        description: "You will always find the latest products and the best product info from all of our brands."
    },
    {
        icon_link: '/free-shipping.svg',
        title: "Free Shipping & Returns",
        description: "We offer free shipping on continental orders over $75 and free 60-days returns with no restocking fees.",
    },
    {
        icon_link: "/customer-service.svg",
        title: "Customer Service",
        description: "We consider our community a vital part of NHS and love to hear from you. You can contact us by phone, email or live chat.",

    }
]