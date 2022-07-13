import React from "react";
import * as S from "components/PageButton/PageButton.style";

export interface PageButtonProps {
    pageButtonFactory: {
        number: number;
        buttonProps: { onClick: () => void };
        isActive: boolean;
    }[];
}

const PageButton = ({ pageButtonFactory }: PageButtonProps) => {
    return (
        <S.Container>
            {pageButtonFactory.map(({ buttonProps, isActive, number }) => (
                <button type="button" key={number} {...buttonProps}>
                    {number}
                </button>
            ))}
        </S.Container>
    );
};

export default PageButton;
