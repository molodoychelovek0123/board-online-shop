import React from 'react';

export interface IBoard {
    id: number;
    settings: {
        image?: string;
    };
}

interface IBoardsProps {
    blocks: IBoard[];
}

export const Boards = (props: IBoardsProps) => {


    const shadows = [1, 2];
    const repeats = [1,2,3,4];

    let blockDown = false;

    return (
        <div className="relative">
            {shadows.map((sh, index) => (
                <div key={index} className={`flex pt-10 lg:pt-12 px-3 lg:px-5 pb-5 lg:pb-8 ${
                    sh === 2 ? 'absolute top-0 left-0 h-full w-full z-10 sh' : 'relative z-20'
                }`}>
                    {repeats.map((repeat, index) => (
                        <div key={index} className={`boards ${props.blocks.length > 6 ? 'anim' : ''}`}>

                            {props.blocks.map((block) => {
                                blockDown = !blockDown;
                                return (<div
                                        key={block.id}
                                        className={`board shadow-md ${block.settings.image ? 'bg-transparent' : 'bg-pattern'}  ${blockDown? 'translate-y-[40%]': ''} `}
                                        style={block.settings.image ? {
                                            backgroundImage: `url('${block.settings.image}')`,
                                        } : {}}
                                    />
                                );
                            })}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
