import React from "react";
import * as S from "components/PageButton/PageButton.style";

export interface PageButtonProps {
    pageButtonFactory: {
        number: number;
        buttonProps: { onClick: () => void };
        isActive: boolean;
    }[];
    prevButtonProps: { onClick: () => void };
    nextButtonProps: { onClick: () => void };
}

const PageButton = ({
    pageButtonFactory,
    prevButtonProps,
    nextButtonProps,
}: PageButtonProps) => {
    return (
        <S.Container>
            <button type="button" {...prevButtonProps}>
                {"<"}
            </button>
            {pageButtonFactory.map(({ buttonProps, isActive, number }) => (
                <button type="button" key={number} {...buttonProps}>
                    {number}
                </button>
            ))}
            <button type="button" {...nextButtonProps}>
                {">"}
            </button>
        </S.Container>
    );
};

export default PageButton;
