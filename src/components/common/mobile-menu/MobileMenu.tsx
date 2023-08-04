import {motion, useCycle, Variants} from 'framer-motion';
import {MenuButton} from './MenuButton';
import {IHeaderLink} from "@/components/common/Header";


// const leftMenu = [
//     'Accessory',
//     'Beanie',
//     'Hoodie',
//     'Long Sleeve',
//     'Shirt',
//     'Shorts',
// ];
const rightMenu = ['Cart', 'Favorite', 'Search'];

const slideVerticalAnimation: Variants = {
    open: {
        rotateX: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            mass: 0.8,
            type: 'spring',
        },
        display: 'block',
    },
    close: {
        rotateX: -15,
        y: -320,
        opacity: 0,
        transition: {
            duration: 0.3,
        },
        transitionEnd: {
            display: 'none',
        },
    },
};

const slideHorizontalAnimation: Variants = {
    left: {
        x: 0,
        transition: {
            duration: 0.3,
        },
    },
    right: {
        x: -250,
        transition: {
            duration: 0.3,
        },
    },
};

export const Menu = ({links}: { links: IHeaderLink[] }) => {
    const leftMenu = links;
    const [isOpen, toggleDropdown] = useCycle(false, true);
    const [isLeftMenu, toggleMenu] = useCycle(true, false);
    const leftMenuHeight = (leftMenu.length + 2) * 65;
    const rightMenuHeight = (rightMenu.length + 2) * 65;
    const height = isLeftMenu ? leftMenuHeight : rightMenuHeight;

    return (
        <div className="mobile-menu">
            <div className="wrapper">
                <MenuButton onClick={toggleDropdown} isOpen={isOpen}/>
                <motion.div
                    className="dropdown-container"
                    style={{height}}
                    initial="close"
                    animate={isOpen ? 'open' : 'close'}
                    variants={slideVerticalAnimation}
                >
                    <motion.div
                        className="dropdown"
                        initial="left"
                        animate={isLeftMenu ? 'left' : 'right'}
                        variants={slideHorizontalAnimation}
                    >
                        <motion.div className="menu menu-categories">
                            <h4 onClick={() => {
                                toggleMenu()
                            }}>ONLINE STORE &#8594;</h4>
                            <ul className="item-list">
                                {leftMenu.map((item, i) => (
                                    <li key={i} className="item" onClick={(e) => {
                                        e.preventDefault();
                                        window.open(item.url, "_self")
                                    }}>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div className="menu menu-sizes">
                            <h4 onClick={() => {
                                toggleMenu()
                            }}>&#8592; MAIN MENU</h4>
                            <ul className="item-list">
                                {rightMenu.map((text, i) => (
                                    <li key={i} className="item">
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}