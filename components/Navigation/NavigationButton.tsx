import Link from "next/link";
import React from "react";
import * as S from "./NavigationButton.style";

interface NavigationButtonProps {
    href: string;
    children: React.ReactNode;
}

const NavigationButton = ({ href, children }: NavigationButtonProps) => {
    return (
        <Link href={href} passHref>
            <S.Container>{children}</S.Container>
        </Link>
    );
};

export default NavigationButton;
