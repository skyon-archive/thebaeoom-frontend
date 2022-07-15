import * as S from "components/PageButton/PageButton.style";
import React from "react";

export interface PageButtonProps {
    pageButton: {
        number: number;
        buttonProps: { onClick: () => void };
        isActive: boolean;
    }[];
    prevButtonProps: { onClick: () => void };
    nextButtonProps: { onClick: () => void };
}

const PageButton = ({
    pageButton,
    prevButtonProps,
    nextButtonProps,
}: PageButtonProps) => {
    return (
        <S.Container>
            <button type="button" {...prevButtonProps}>
                {"<"}
            </button>
            {pageButton.map(({ buttonProps, number }) => (
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
