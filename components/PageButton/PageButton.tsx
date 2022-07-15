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
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>
            {pageButton.map(({ buttonProps, isActive, number }) => (
                <button
                    type="button"
                    key={number}
                    {...buttonProps}
                    style={{
                        background: isActive ? "#eee" : undefined,
                        fontWeight: isActive ? "bold" : undefined,
                    }}
                >
                    {number}
                </button>
            ))}
            <button type="button" {...nextButtonProps}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
        </S.Container>
    );
};

export default PageButton;
