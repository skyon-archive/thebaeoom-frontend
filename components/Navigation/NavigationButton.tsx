import Link from "next/link";
import React from "react";
import * as S from "./NavigationButton.style";

interface NavigationButtonProps {
    href: string;
    children: React.ReactNode;
    active?: boolean;
}

const NavigationButton = ({
    href,
    children,
    active,
}: NavigationButtonProps) => {
    return (
        <Link href={href} passHref>
            <S.Container active={active}>{children}</S.Container>
        </Link>
    );
};

export default NavigationButton;
