import { motion } from 'framer-motion';

interface PathProps {
    d: string;
    variants: {
        closed: { d?: string; opacity?: number};
        open: { d?: string; opacity?: number  };
    };
    transition?: {
        duration: number;
    };
}

const Path: React.FC<PathProps> = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="currentColor"
        strokeLinecap="round"
        {...props}
    />
);

interface MenuButtonProps {
    onClick: () => void;
    isOpen: boolean;
}

export const MenuButton = ({ onClick, isOpen } : MenuButtonProps) => {
    return (
        <motion.button
            className="menu-button"
            onClick={onClick}
            animate={isOpen ? 'open' : 'closed'}
            initial={false}
        >
            <svg width="23" height="23" style={{ margin: '4px 0 0 2px' }} viewBox="0 0 23 23">
                <Path
                    d="M 2 2.5 L 20 2.5"
                    variants={{
                        closed: { d: 'M 2 2.5 L 20 2.5' },
                        open: { d: 'M 3 16.5 L 17 2.5' },
                    }}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.1 }}
                />
                <Path
                    d="M 2 16.346 L 20 16.346"
                    variants={{
                        closed: { d: 'M 2 16.346 L 20 16.346' },
                        open: { d: 'M 3 2.5 L 17 16.346' },
                    }}
                />
            </svg>
        </motion.button>
    );
};
